import { css, cva } from '@styled-stytem/css'

import { GetCalendarYearlyResponse } from '@/api/types/home_sub'
import EventRow from '@/components/home_sub/EventRow'
import { SemesterType } from '@/types/timetable'
import { numberToMonthAbb } from '@/util/academicCalendar'

interface AcademicCalendarProps {
  semester: SemesterType
  data: GetCalendarYearlyResponse
}
const AcademicCalendar = ({ data, semester }: AcademicCalendarProps) => {
  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
      {data.map(({ month, schedules }) => (
        <div
          key={month}
          className={cva({
            base: { display: 'flex', borderBottom: '2px solid {colors.darkGray.2}' },
            variants: { isStart: { true: { borderTop: '2px solid {colors.darkGray.2}' } } },
          })({ isStart: (semester === 'Spring' && month === 2) || (semester === 'Fall' && month === 8) })}
        >
          <div
            className={css({
              flexShrink: 0,
              px: 10,
              color: 'black.1',
              fontSize: 36,
              fontWeight: 600,
              bgColor: 'white',
              w: 48,
              borderRight: '{colors.darkGray.2} solid 0.5px',
              display: 'flex',
              alignItems: 'center',
              minH: 22,
              mdDown: { justifyContent: 'center', px: 0, w: 20, fontSize: 16 },
            })}
          >
            {numberToMonthAbb[month].toUpperCase()}
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', flexGrow: 1 })}>
            {schedules.map((event, index) => (
              <EventRow key={`${month}-${index}`} index={index} event={event} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default AcademicCalendar
