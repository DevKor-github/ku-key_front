import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import { useDeleteTimetable, useGetUserTimetableList, usePostTimetable } from '@/api/hooks/timetable'
import Timetable from '@/components/timetable'
import ShareBtn from '@/components/timetable/Button/ShareBtn'
import Dropdown from '@/components/timetable/Dropdown'
import LectureBottomSheet from '@/components/timetable/LectureBottomSheet'
import StatusBar from '@/components/timetable/StatusBar'
import { isBottomSheetVisible } from '@/lib/store/bottomSheet'
import { convertHtmlToImage, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList, isLoading } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()
  const { mutate: createTimetable } = usePostTimetable()
  const isCreating = useRef(false)

  const imgRef = useRef<HTMLDivElement>(null)
  const [curSemester, setCurSemester] = useState(2)
  const [curIndex, setCurIndex] = useState(0)

  const isSheetVisible = useAtomValue(isBottomSheetVisible)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)

  const semesterList = timetablePreprocess(timetableList)

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

  const handleDrawer = useCallback(
    (type: 'chevron' | 'class' | 'own') => {
      match(type)
        .with('chevron', () => {
          setIsBottomSheetOpen(prev => !prev)
          if (sheetState === null) {
            setSheetState('class')
          }
        })
        .with('class', () => {
          setIsBottomSheetOpen(true)
          setSheetState('class')
        })
        .with('own', () => {
          setIsBottomSheetOpen(true)
          setSheetState('schedule')
        })
    },
    [sheetState],
  )

  useEffect(() => {
    if (!isLoading && semesterList[curSemester].isSkeleton && !isCreating.current) {
      isCreating.current = true
      createTimetable({
        timetableName: 'timetable 1',
        semester: semesterList[curSemester].semester,
        year: semesterList[curSemester].year,
      })
    }
    if (!semesterList[curSemester].isSkeleton) {
      isCreating.current = false
    }
  }, [isLoading, createTimetable, semesterList, curSemester])

  return (
    <>
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
      <>
        <Timetable
          ref={imgRef}
          timetable={semesterList[curSemester].timetables[curIndex]}
          deleteTimetableHandler={deleteTimetableHandler}
        />
        {createPortal(
          <LectureBottomSheet
            timetableId={semesterList[curSemester].timetables[curIndex].timetableId}
            visible={isSheetVisible}
            handleDrawer={handleDrawer}
            isOpen={isBottomSheetOpen}
            setIsOpen={setIsBottomSheetOpen}
            sheetState={sheetState}
          />,
          document.body,
        )}
      </>
    </>
  )
}

export default MyTimetablePage
