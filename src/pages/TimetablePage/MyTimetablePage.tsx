import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useState } from 'react'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import TimeTable from '@/components/timetable'
import StatusBar from '@/components/timetable/MyTimetable/StatusBar'
import NullTable from '@/components/timetable/NullTable'
import ShareBtn from '@/components/timetable/ShareBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList, isPending } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)

  const semesterList = timetablePreprocess(timetableList)

  const deleteTimetableHandler = (timeTableId: number) => {
    if (curIndex !== 0) {
      setCurIndex(prev => prev - 1)
    }
    deleteTimetable({ timeTableId })
  }

  if (isPending) {
    // todo: 스켈레톤 ui 컴포넌트화
    return <div>로딩 중</div>
  }

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
            setCurSemester={setCurSemester}
            setCurIndex={setCurIndex}
          />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn>Link</ShareBtn>
          <ShareBtn icon={true}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setCurIndex} />
      {semesterList[curSemester].timetables.length === 0 ? (
        <NullTable />
      ) : (
        <TimeTable
          timetable={semesterList[curSemester].timetables[curIndex]}
          deleteTimetableHandler={deleteTimetableHandler}
        />
      )}
    </>
  )
}

export default MyTimetablePage
