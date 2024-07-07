import { css } from '@styled-stytem/css'

import WeekHeader from '@/components/calendar/WeekHeader'

const CalendarContainer = () => {
  return (
    <div
      className={css({
        display: 'inline-flex',
        py: '30px',
        px: 2.5,
        alignItems: 'flex-start',
      })}
    >
      <WeekHeader />
    </div>
  )
}

export default CalendarContainer
