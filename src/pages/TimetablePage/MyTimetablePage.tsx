import { css } from '@styled-stytem/css'
import { Download, Plus } from 'lucide-react'
import { useState } from 'react'

import TimeTable from '@/components/timetable'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ToolbarBtn } from '@/pages/TimetablePage'
import { TimetableInfo } from '@/types/timetable'
import { timetablePreprocess } from '@/util/timetableUtil'

const dummyTimetableList: TimetableInfo[] = [
  { timetableID: '5837422123', name: 'timetable1', year: '2023', semester: 'Fall', isPin: true },
  { timetableID: '1347897282', name: 'timetable1', year: '2024', semester: 'Spring', isPin: true },
  { timetableID: '4852836482', name: 'timetable2', year: '2024', semester: 'Spring', isPin: false },
  { timetableID: '2365718237', name: 'timetable1', year: '2024', semester: 'Fall', isPin: true },
]

const handleCreateTimetableBtn = () => {
  // todo : 시간표 추가 로직
  alert('시간표 추가!')
}

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
          <div className={css(ToolbarBtn.raw({ back: 'white', icon: true }))}>
            <Download />
          </div>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5, mb: 5 })}>
        <button
          onClick={handleCreateTimetableBtn}
          className={css({
            h: 9,
            w: 9,
            cursor: 'pointer',
            bgColor: 'red.2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rounded: 10,
            color: 'white',
            overflow: 'hidden',
            position: 'relative',
          })}
        >
          <div
            className={css({
              position: 'absolute',
              h: 9,
              w: 9,
              bg: 'linear-gradient(0deg, black 35%, rgba(0, 0, 0, 0.20) 88%)',
              opacity: 0.2,
              zIndex: 1,
            })}
          />
          <Plus className={css({ zIndex: 2 })} />
        </button>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 1.5 })}>
          {semesterList[curSemester].timetables.map(timetable => {
            return (
              <button className={css({ px: 2.5, py: 2, cursor: 'pointer', bgColor: '#FFF4F4', rounded: 10 })}>
                {timetable.name}
              </button>
            )
          })}
        </div>
      </div>
      <TimeTable semester={semesterList[curSemester].semester} year={semesterList[curSemester].year} />
    </>
  )
}

export default MyTimetablePage
