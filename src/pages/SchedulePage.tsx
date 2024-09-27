import { css } from '@styled-system/css'
import { useCallback, useState } from 'react'

import { useGetAcademicCalendar } from '@/api/hooks/calendar'
import koreaUniv from '@/assets/koreaUniv.png'
import AcademicCalendar from '@/components/calendar/AcademicCalendar'
import Dropdown from '@/components/timetable/Dropdown'
import { useAcademicSemester } from '@/util/academicCalendar'
import { makeSemesterDropdownList } from '@/util/timetableUtil'

const SchedulePage = () => {
  const [dropdownIndex, setDropdownIndex] = useState(3)

  const academicSemester = useAcademicSemester()
  const curSemester = academicSemester[dropdownIndex]
  const { data } = useGetAcademicCalendar({
    year: Number(curSemester.year),
    semester: curSemester.semester === 'Spring' ? 1 : 2,
  })

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
          h: { base: '400px', mdDown: '200px' },
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: { base: 64, mdDown: 32 },
          fontWeight: 700,
          color: 'white',
          px: { base: 64, mdDown: 5 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        })}
        style={{ backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/scheduleBanner.webp)` }}
      >
        Academic Schedule
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          bgColor: 'bg.gray',
          px: { base: 64, mdDown: 5 },
          py: 30,
        })}
      >
        <div
          className={css({
            w: 'full',
            maxW: '1300px',
            display: 'flex',
            flexDir: 'column',
            gap: 10,
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
              <img src={koreaUniv} alt="Korea University Logo" className={css({ w: 11 })} />
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  justifyContent: 'space-between',
                  mdDown: { display: 'none' },
                })}
              >
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
              dropdownList={makeSemesterDropdownList(academicSemester)}
              setCurIndex={setSemesterIndex}
            />
          </div>
          <AcademicCalendar semester={curSemester.semester} data={data} />
        </div>
      </div>
    </>
  )
}

export default SchedulePage
