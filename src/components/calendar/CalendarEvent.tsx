import { css } from '@styled-stytem/css'
import { format } from 'date-fns'

import Event from '@/components/calendar/Event'

const CalendarEvent = () => {
  const today = new Date()
  return (
    <div
      className={css({
        display: 'flex',
        w: '369px',
        maxH: '456px',
        flexDir: 'column',
        alignItems: 'flex-start',
        flexShrink: 0,
      })}
    >
      <div className={css({ display: 'flex', px: 1.5, py: 5 })}>
        <p className={css({ fontSize: 28, fontWeight: 600 })}>{format(today, 'MMMM')}</p>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 5,
          w: 'full',
          maxH: 383,
          overflowY: 'scroll',
          px: 1,
          py: 1.5,
          pr: '23px',
        })}
      >
        <Event date={new Date()} isToday content="Start Date of School" />
        <Event date={new Date()} isToday content="Start Date of School" />
        <Event date={new Date()} isToday content="Start Date of School" />
        <Event date={new Date()} isToday content="Start Date of School" />
        <Event date={new Date()} isToday content="Start Date of School" />
      </div>
    </div>
  )
}

export default CalendarEvent
