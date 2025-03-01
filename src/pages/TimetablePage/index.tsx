import { css } from '@styled-system/css'
import { useAtomValue } from 'jotai'
import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import Timetable from '@/components/timetable'
import ShareBtn from '@/components/timetable/Button/ShareBtn'
import Dropdown from '@/components/timetable/Dropdown'
import LectureBottomSheet from '@/components/timetable/LectureBottomSheet'
import StatusBar from '@/components/timetable/StatusBar'
import { LoadingScreen } from '@/components/ui/spinner'
import { useCreateDefaultTimetable } from '@/domain/Timetable/hooks/useCreateDefaultTimetable'
import { isBottomSheetVisible } from '@/lib/store/bottomSheet'
import { convertHtmlToImage, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const TimetablePage = () => {
  // 개요
  // semester를 쿼리스트링으로 관리

  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)
  const [curSemester, setCurSemester] = useState(2)
  const [curIndex, setCurIndex] = useState(0)

  const isSheetVisible = useAtomValue(isBottomSheetVisible)

  const semesterList = timetablePreprocess(timetableList)

  const isEmptyTimetable = semesterList[curSemester].timetables.length === 0 // 현재 선택한 학기의 시간표가 없는 경우

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setCurSemester(toIndex)
      setCurIndex(0)
    },
    [setCurSemester, setCurIndex],
  )
  const setTimetableIndex = useCallback(
    (toIndex: number) => {
      setCurIndex(toIndex)
    },
    [setCurIndex],
  )
  const deleteTimetableHandler = useCallback(
    (timetableId: number) => {
      if (curIndex !== 0) {
        setCurIndex(prev => prev - 1)
      }
      deleteTimetable({ timetableId })
    },
    [setCurIndex, deleteTimetable, curIndex],
  )

  useCreateDefaultTimetable(isEmptyTimetable, semesterList[curSemester])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        px: { base: 64, mdDown: 4 },
        mb: 40,
        alignItems: 'center',
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', maxW: '1131px', width: '100%' })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
          <div className={css({ display: 'flex', flexDir: { base: 'row', mdDown: 'column' }, gap: 5 })}>
            <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
              My schedule
            </div>
            <Dropdown
              dropdownList={makeSemesterDropdownList(semesterList)}
              curIndex={curSemester}
              setCurIndex={setSemesterIndex}
            />
          </div>
          <div className={css({ display: { base: 'flex', mdDown: 'none' }, flexDir: 'row', gap: 2.5 })}>
            <ShareBtn shareHandler={() => convertHtmlToImage(imgRef.current, 'my_timetable')} />
          </div>
        </div>
        <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setTimetableIndex} />
        {isEmptyTimetable ? (
          <LoadingScreen />
        ) : (
          <>
            <Timetable
              ref={imgRef}
              timetable={semesterList[curSemester].timetables[curIndex]}
              deleteTimetableHandler={deleteTimetableHandler}
            />
            {createPortal(
              <LectureBottomSheet
                timetableId={semesterList[curSemester].timetables[curIndex].timetableId}
                year={semesterList[curSemester].year}
                semester={semesterList[curSemester].semester}
                visible={isSheetVisible}
              />,
              document.body,
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default TimetablePage
