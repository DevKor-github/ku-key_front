import { css } from '@styled-stytem/css'
import { useCallback, useRef, useState } from 'react'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import Timetable from '@/components/timetable'
import ShareBtn from '@/components/timetable/Button/ShareBtn'
import Dropdown from '@/components/timetable/Dropdown'
import NullTimetable from '@/components/timetable/NullTimetable'
import StatusBar from '@/components/timetable/StatusBar'
import { convertHtmlToImage, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)
  const [curSemester, setCurSemester] = useState(2)
  const [curIndex, setCurIndex] = useState(0)

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
      {semesterList[curSemester].timetables.length === 0 ? (
        <NullTimetable
          children={
            <>
              There is no set timetable <br /> Press the plus button to create a timetable!
            </>
          }
        />
      ) : (
        <Timetable
          ref={imgRef}
          timetable={semesterList[curSemester].timetables[curIndex]}
          deleteTimetableHandler={deleteTimetableHandler}
        />
      )}
    </>
  )
}

export default MyTimetablePage
