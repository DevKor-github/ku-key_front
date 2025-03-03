import { css } from '@styled-system/css'
import { useAtomValue } from 'jotai'
import { useCallback, useRef } from 'react'
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
import { DEFAULT_SEMESTER_INDEX, DEFAULT_TIMETABLE_INDEX, TimetableParams } from '@/pages/TimetablePage/constants'
import { useQueryParams } from '@/util/hooks/useQueryParams'
import { convertHtmlToImage, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const TimetablePage = () => {
  const [queryParam, setQueryParam] = useQueryParams<TimetableParams>()
  const curSemester = queryParam.semester ? Number(queryParam.semester) : DEFAULT_SEMESTER_INDEX
  const curIndex = queryParam.index ? Number(queryParam.index) : DEFAULT_TIMETABLE_INDEX
  const setCurSemester = useCallback(
    (target: number) => {
      setQueryParam({ semester: target.toString(), index: undefined })
    },
    [setQueryParam],
  )
  const setCurIndex = useCallback(
    (target: number) => {
      setQueryParam({ index: target.toString() })
    },
    [setQueryParam],
  )

  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)

  const isSheetVisible = useAtomValue(isBottomSheetVisible)

  const semesterList = timetablePreprocess(timetableList)

  const isEmptyTimetable = semesterList[curSemester].timetables.length === 0

  const setTimetableIndex = useCallback(
    (toIndex: number) => {
      setCurIndex(toIndex)
    },
    [setCurIndex],
  )
  const deleteTimetableHandler = useCallback(
    (timetableId: number) => {
      if (curIndex !== 0) {
        setCurIndex(curIndex - 1)
      }
      deleteTimetable({ timetableId })
    },
    [setCurIndex, deleteTimetable, curIndex],
  )

  useCreateDefaultTimetable(semesterList[curSemester])

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
              setCurIndex={setCurSemester}
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
