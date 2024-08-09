import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'

import { useGetCalendarYearly } from '@/api/hooks/home_sub'
import koreaUniv from '@/assets/koreaUniv.png'
import AcademicCalendar from '@/components/home_sub/AcademicCalendar'
import Dropdown from '@/components/timetable/Dropdown'
import { academicSchedulePreprocess } from '@/util/academicCalendar'
import { makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const SchedulePage = () => {
  const semesterList = timetablePreprocess([])

  const [dropdownIndex, setDropdownIndex] = useState(2)
  const curYear = semesterList[dropdownIndex].year

  const { data: rawData } = useGetCalendarYearly({ year: curYear })

  const data = academicSchedulePreprocess(rawData)

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setDropdownIndex(toIndex)
    },
    [setDropdownIndex],
  )

  return (
    <>
      <div
        className={css({
          h: '400px',
          bgColor: 'red.3',
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: 64,
          fontWeight: 700,
          color: 'white',
          px: 64,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        Academic Schedule
      </div>
      <div className={css({ px: 64, pt: 29, display: 'flex', flexDir: 'column', gap: 10, bgColor: 'bg.gray' })}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <div className={css({ display: 'flex', gap: 4 })}>
            <img src={koreaUniv} alt="Korea University Logo" className={css({ w: 11 })} />
            <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
              <div className={css({ display: 'flex', gap: 4, alignItems: 'flex-end', color: 'black.2' })}>
                <span className={css({ fontSize: 30, fontWeight: 700 })}>KOREA Univ</span>
                <span className={css({ fontSize: 24 })}>Academic Schedule</span>
              </div>
              <div className={css({ color: 'darkGray.1', fontSize: 18 })}>
                Check out Korea University's academic schedule
              </div>
            </div>
          </div>
          <Dropdown
            curIndex={dropdownIndex}
            dropdownList={makeSemesterDropdownList(semesterList)}
            setCurIndex={setSemesterIndex}
          />
        </div>
        <AcademicCalendar data={data} />
      </div>
    </>
  )
}

export default SchedulePage
