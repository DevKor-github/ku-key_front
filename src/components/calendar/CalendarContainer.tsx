import { css } from '@styled-stytem/css'

import Day from '@/components/calendar/Day'
import WeekHeader from '@/components/calendar/WeekHeader'

const CalendarContainer = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        py: '13px',
        px: 2.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5,
      })}
    >
      <WeekHeader />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          alignSelf: 'stretch',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          })}
        >
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
      </div>
    </div>
  )
}

export default CalendarContainer
