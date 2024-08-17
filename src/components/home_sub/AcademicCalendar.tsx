import { css, cva } from '@styled-stytem/css'

import { GetCalendarYearlyResponse } from '@/api/types/home_sub'
import { SemesterType } from '@/types/timetable'
import { numberToMonthAbb } from '@/util/academicCalendar'

interface AcademicCalendarProps {
  semester: SemesterType
  data: GetCalendarYearlyResponse
}
const AcademicCalendar = ({ data, semester }: AcademicCalendarProps) => (
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
            flexShrink: 0,
          })}
        >
          {numberToMonthAbb[month].toUpperCase()}
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', flexGrow: 1 })}>
          {schedules.map((event, index) => {
            const date = new Date(event.startDate)
            return (
              <div key={`${month}-${index}`} className={css({ display: 'flex', h: 22, w: '100%' })}>
                <div
                  className={cva({
                    base: {
                      w: 57,
                      px: 7,
                      color: 'black.1',
                      fontSize: 20,
                      letterSpacing: '-0.4px',
                      borderRight: '{colors.darkGray.2} solid 0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    },
                    variants: {
                      isStart: {
                        false: {
                          borderTop: '{colors.darkGray.2} solid 1px',
                        },
                      },
                    },
                  })({ isStart: index === 0 })}
                >
                  {date.getDate()} ({event.startDay.toUpperCase()})
                </div>
                <div
                  className={cva({
                    base: {
                      flexGrow: 1,
                      pl: 10,
                      color: 'darkGray.1',
                      fontSize: 20,
                      letterSpacing: '-0.4px',
                      display: 'flex',
                      alignItems: 'center',
                    },
                    variants: {
                      isStart: {
                        false: {
                          borderTop: '{colors.darkGray.2} dashed 1px',
                        },
                      },
                    },
                  })({ isStart: index === 0 })}
                >
                  {event.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ))}
  </section>
)

export default AcademicCalendar
