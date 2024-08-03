import { css, cx } from '@styled-stytem/css'

import { DayProps } from '@/types/calendar'
import { getDayStyles } from '@/util/getDaysColor'

interface CalendarDayProps {
  day: DayProps
  date: Date
  eventCount: number
}
const Day = ({ day, date, eventCount }: CalendarDayProps) => {
  console.log(eventCount)
  return (
    <div
      className={css({
        display: 'flex',
        pb: 2.5,
        flexDir: 'column',
        gap: -3,
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        className={cx(
          css({
            display: 'flex',
            w: '50px',
            h: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 21,
            fontWeight: 600,
            rounded: 'full',
          }),
          getDayStyles({ ...day }, date),
        )}
      >
        {day.date.getDate()}
      </div>
      {eventCount > 0 ?? (
        <div className={css({ display: 'flex', w: '5px', h: '5px', bgColor: 'red.2', rounded: 'full' })} />
      )}
    </div>
  )
}

export default Day
