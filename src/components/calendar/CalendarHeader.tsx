import { css } from '@styled-stytem/css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'

const CalendarHeader = () => {
  const today = new Date()

  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 117,
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      })}
    >
      <p className={css({ fontSize: 40, fontWeight: 700 })}>
        {today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}
      </p>
      <div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 })}>
        <p className={css({ fontSize: 25, fontWeight: 700 })}>{daysOfWeek[today.getDay()]}</p>
      </div>
    </div>
  )
}

export default CalendarHeader
