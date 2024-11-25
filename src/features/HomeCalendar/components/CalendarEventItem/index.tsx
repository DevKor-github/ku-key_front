import { css } from '@styled-system/css'
import { format } from 'date-fns'

import * as s from './style.css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'
interface EventProps {
  date: Date
  content: string
  isSelected: boolean
}
const CalendarEventItem = ({ date, content, isSelected }: EventProps) => {
  return (
    <div aria-label={date.toLocaleDateString()} className={s.Wrapper({ isSelected })}>
      <div className={s.RedIndicator({ isSelected })} />
      <div className={s.Content}>
        <div className={s.Date}>
          <p className={css({ textStyle: 'body2_M' })}>{daysOfWeek[date.getDay()]}</p>
          <p className={css({ textStyle: 'heading1_L' })}>{date.toLocaleString('en-US', { day: '2-digit' })}</p>
        </div>
        <div className={s.TextBox}>
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
