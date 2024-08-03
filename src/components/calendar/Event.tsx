import { css } from '@styled-stytem/css'
import { format } from 'date-fns'

import { daysOfWeek } from '@/lib/calendar/days-of-week'

interface EventProps {
  date: Date
  isToday: boolean
  content: string
}
const Event = ({ date, isToday, content }: EventProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        alignSelf: 'stretch',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          w: 16,
          h: 16,
          rounded: 10,
          bgColor: isToday ? 'red.2' : 'white',
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
          color: 'white',
        })}
      >
        <p className={css({ fontSize: 14, fontWeight: 500 })}>{daysOfWeek[date.getDay()]}</p>
        <p className={css({ fontSize: 24, fontWeight: 700 })}>{date.toLocaleString('en-US', { month: '2-digit' })}</p>
      </div>
      <div
        className={css({
          display: 'flex',
          w: 60,
          maxH: 16,
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 2.5,
        })}
      >
        <p className={css({ fontSize: 20, fontWeight: 600, color: 'black' })}>{content}</p>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>{format(date, 'yyyy.MM.dd')}</p>
      </div>
    </div>
  )
}

export default Event
