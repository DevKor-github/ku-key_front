import { css } from '@styled-stytem/css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'

const CalendarHeader = () => {
  const today = new Date()

  return (
    <div className={css({ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '5px' })}>
      <p className={css({ fontSize: 48, fontWeight: 700 })}>
        {today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}
      </p>
      <div className={css({ display: 'flex', pt: 5, pb: 1.5, justifyContent: 'center', alignItems: 'center' })}>
        <p className={css({ fontSize: 26, fontWeight: 600 })}>{daysOfWeek[today.getDay()]}</p>
      </div>
    </div>
  )
}

export default CalendarHeader
