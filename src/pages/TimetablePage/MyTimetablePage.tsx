import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useState } from 'react'

import { useGetTimetableList } from '@/api/hooks/timetable'
import TimeTable from '@/components/timetable'
import StatusBar from '@/components/timetable/MyTimetable/StatusBar'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ShareBtn } from '@/pages/TimetablePage'
import { Semester } from '@/types/timetable'
import { timetablePreprocess } from '@/util/timetableUtil'

interface TimetableStatusLayoutProps {
  semesterList: Semester[]
  curSemester: number
  curIndex: number
  setCurIndex: React.Dispatch<React.SetStateAction<number>>
}
const MyTimetableOutlet = ({ semesterList, curSemester, curIndex, setCurIndex }: TimetableStatusLayoutProps) => {
  return (
    <>
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setCurIndex} />
      {semesterList[curSemester].timetables.length === 0 ? (
        <div>빈 학기</div>
      ) : (
        <TimeTable timetable={semesterList[curSemester].timetables[curIndex]} />
      )}
    </>
  )
}

const MyTimetablePage = () => {
  const { data: timetableList, isPending } = useGetTimetableList()

  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)

  const semesterList = timetablePreprocess(timetableList)

  if (isPending) {
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
          <div className={css(ShareBtn.raw())}>Link</div>
          <div className={css(ShareBtn.raw({ icon: true }))}>
            <Download />
          </div>
        </div>
      </div>
      <MyTimetableOutlet
        semesterList={semesterList}
        curSemester={curSemester}
        curIndex={curIndex}
        setCurIndex={setCurIndex}
      />
    </>
  )
}

export default MyTimetablePage
