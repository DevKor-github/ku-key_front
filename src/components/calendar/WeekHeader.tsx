import { css } from '@styled-stytem/css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'

const WeekHeader = () => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      {daysOfWeek.map(day => (
        <div
          key={day}
          className={css({
            display: 'flex',
            w: '45px',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <p className={css({ fontSize: 16, fontWeight: 600, color: 'darkGray.2' })}>{day}</p>
        </div>
      ))}
    </div>
  )
}

export default WeekHeader
