import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import Timetable from '@/components/timetable'
import StatusBar from '@/components/timetable/MyTimetable/StatusBar'
import NullTimetable from '@/components/timetable/NullTimetable'
import ShareBtn from '@/components/timetable/ShareBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { convertHtmlToImage, timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)
  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)

  const semesterList = timetablePreprocess(timetableList)

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setCurSemester(toIndex)
    },
    [setCurSemester],
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
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <TimetableDropdown
            semesterList={semesterList}
            curSemester={curSemester}
            setCurSemester={setSemesterIndex}
            setCurIndexZero={() => setTimetableIndex(0)}
          />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn icon={true} shareHandler={() => convertHtmlToImage(imgRef.current, 'my_timetable')}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setTimetableIndex} />
      {semesterList[curSemester].timetables.length === 0 ? (
        <NullTimetable />
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
