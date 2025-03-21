import { css, cva } from '@styled-system/css'

import { useGetAcademicCalendar } from '@/api/hooks/calendar'
import EventRow from '@/components/calendar/EventRow'
import { Semester } from '@/types/timetable'
import { numberToMonthAbb } from '@/util/academicCalendar'

interface AcademicCalendarProps {
  curSemester: Semester
}
const AcademicCalendar = ({ curSemester }: AcademicCalendarProps) => {
  const { data } = useGetAcademicCalendar({
    year: Number(curSemester.year),
    semester: curSemester.semester === 1 ? 1 : 2,
  })

  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
      {data.map(({ month, schedules }) => (
        <div
          key={month}
          className={cva({
            base: { display: 'flex', borderBottom: '2px solid {colors.darkGray.2}' },
            variants: { isStart: { true: { borderTop: '2px solid {colors.darkGray.2}' } } },
          })({ isStart: (curSemester.semester === 1 && month === 2) || (curSemester.semester === 3 && month === 8) })}
        >
          <div
            className={css({
              flexShrink: 0,
              px: { base: 10, lgDown: 6, mdDown: 0 },
              color: 'black.1',
              fontSize: { base: 36, lgDown: 24, mdDown: 16, smDown: 14 },
              fontWeight: 600,
              bgColor: 'white',
              w: { base: 48, lgDown: 36, mdDown: 20 },
              borderRight: '{colors.darkGray.2} solid 0.5px',
              display: 'flex',
              pt: '26px',
              lineHeight: '100%',
              minH: 22,
              mdDown: { justifyContent: 'center' },
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
