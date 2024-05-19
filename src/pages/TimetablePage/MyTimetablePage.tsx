import { css } from '@styled-stytem/css'
import { useState } from 'react'

import TimeTable from '@/components/timetable'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ToolbarBtn } from '@/pages/TimetablePage'
import { TimetableInfo } from '@/types/timetable'
import { timetablePreprocess } from '@/util/timetableUtil'

const dummyTimetableList: TimetableInfo[] = [
  { timetableID: '5837422123', year: '2023', semester: 'Fall', isPin: true },
  { timetableID: '1347897282', year: '2024', semester: 'Spring', isPin: true },
  { timetableID: '4852836482', year: '2024', semester: 'Spring', isPin: false },
  { timetableID: '2365718237', year: '2024', semester: 'Fall', isPin: true },
]

const MyTimetablePage = () => {
  const [curSemester, setCurSemester] = useState(0)
  const semesterList = timetablePreprocess(dummyTimetableList)

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 6 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <TimetableDropdown semesterList={semesterList} curSemester={curSemester} setCurSemester={setCurSemester} />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5 })}>
          <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
          <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
        </div>
      </div>
      <TimeTable semester={'Spring'} year={'2024'} />
    </>
  )
}

export default MyTimetablePage
