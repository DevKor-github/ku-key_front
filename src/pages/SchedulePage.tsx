import { css } from '@styled-system/css'
import { useCallback, useState } from 'react'

import koreaUniv from '@/assets/koreaUniv.png'
import ErrorBoundarySuspense from '@/common/components/ErrorBoundarySuspense'
import AcademicCalendar from '@/components/calendar/AcademicCalendar'
import MetaTag from '@/components/MetaTag'
import Dropdown from '@/components/timetable/Dropdown'
import { LoadingSpinner } from '@/components/ui/spinner'
import { useAcademicSemester } from '@/util/academicCalendar'
import { makeSemesterDropdownList } from '@/util/timetableUtil'

const SchedulePage = () => {
  const [dropdownIndex, setDropdownIndex] = useState(2)

  const academicSemester = useAcademicSemester()
  const curSemester = academicSemester[dropdownIndex]

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setDropdownIndex(toIndex)
    },
    [setDropdownIndex],
  )

  return (
    <>
      <MetaTag
        title="Academic Schedule"
        description="Check out Korea University's academic calendar at a glance."
        keywords="schedule, academic, academic schedule, calendar, academic calendar"
      />
      <div
        className={css({
          h: { base: '400px', lgDown: '300px', mdDown: '200px' },
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: { base: 64, lgDown: 48, mdDown: 32 },
          fontWeight: 700,
          color: 'white',
          px: { base: 58, lgDown: 20, mdDown: 5 },
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
          px: { base: 58, lgDown: 20, mdDown: 5 },
          py: { base: 30, lgDown: 20, mdDown: 5 },
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
          <ErrorBoundarySuspense fallback={<LoadingSpinner />}>
            <AcademicCalendar curSemester={curSemester} />
          </ErrorBoundarySuspense>
        </div>
      </div>
    </>
  )
}

export default SchedulePage
