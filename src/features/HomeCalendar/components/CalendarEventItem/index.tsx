import { css } from '@styled-system/css'
import { format } from 'date-fns'

import { daysOfWeek } from '@/lib/calendar/days-of-week'

interface EventProps {
  date: Date
  content: string
  isSelected: boolean
}
const CalendarEventItem = ({ date, content, isSelected }: EventProps) => {
  return (
    <div
      aria-label={date.toLocaleDateString()}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        alignSelf: 'stretch',
        bgColor: isSelected ? 'lightGray.2' : 'white',
        w: 'full',
        maxW: 348,
        rounded: 3,
      })}
    >
      <div className={css({ w: 1.5, h: 'full', bgColor: isSelected ? 'red.2' : 'white', rounded: 3 })} />
      <div
        className={css({ display: 'flex', w: 'full', alignSelf: 'stretch', py: 1.5, alignItems: 'center', gap: 1.5 })}
      >
        <div
          className={css({
            display: 'flex',
            w: 'full',
            maxW: 15,
            flexDir: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <p className={css({ textStyle: 'body2_M' })}>{daysOfWeek[date.getDay()]}</p>
          <p className={css({ textStyle: 'heading1_L' })}>{date.toLocaleString('en-US', { day: '2-digit' })}</p>
        </div>
        <div
          className={css({
            display: 'flex',
            px: '14px',
            flexDir: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 2.5,
          })}
        >
          <p
            className={css({
              textStyle: 'heading4_M',
              overflow: 'hidden',
              w: 'full',
              maxW: 242,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {content}
          </p>
          <p className={css({ textStyle: 'body2_M', color: 'darkGray.2' })}>{format(date, 'yyyy.MM.dd')}</p>
        </div>
      </div>
    </div>
  )
}

export default CalendarEventItem
