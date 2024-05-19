import { css } from '@styled-stytem/css'
import { useState } from 'react'

import TimeTable from '@/components/timetable'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ToolbarBtn } from '@/pages/timetable/TimetablePage'

// todo: 자료형 개선
export interface Semester {
  year: string
  semester: string
}

const dummySemesterList: Semester[] = [
  { year: '2024', semester: 'Fall' },
  { year: '2024', semester: 'Spring' },
]

const MyTimetablePage = () => {
  const [curSemester, setCurSemester] = useState(0)
  return (
    <div className={css({ display: 'flex', flexDir: 'column', px: 20 })}>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 6 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <TimetableDropdown
            semesterList={dummySemesterList}
            curSemester={curSemester}
            setCurSemester={setCurSemester}
          />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5 })}>
          <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
          <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
        </div>
      </div>
      <TimeTable semester={'Spring'} year={'2024'} />
    </div>
  )
}

export default MyTimetablePage
