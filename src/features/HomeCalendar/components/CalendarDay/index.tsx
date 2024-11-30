import { css, cx } from '@styled-system/css'
import { isEqual } from 'date-fns'
import { memo } from 'react'

import * as s from './style.css'

import { DayProps } from '@/types/calendar'

interface CalendarDayProps {
  isToday: boolean
  day: DayProps
  selectedDate: Date
  eventCount: number
}

const CalendarDay = memo(({ isToday, day, selectedDate, eventCount }: CalendarDayProps) => {
  const getColor = () => {
    if (day.status !== 'THIS_MONTH') return 'lightGray.1'
    if (isToday) return 'white'
    return 'black.2'
  }
  return (
    <div className={s.Wrapper}>
      <div className={s.Box}>
        <div
          className={cx(
            s.Day,
            css({
              border: isEqual(selectedDate, day.date) ? '1px solid red' : '1px solid transparent',
              color: getColor(),
              bgColor: isToday ? 'red.2' : 'transparent',
            }),
          )}
        >
          {day.date.getDate()}
        </div>
        <div
          className={s.Dot({
            hasEvent: eventCount > 0 && day.status === 'THIS_MONTH' && !isToday && !isEqual(selectedDate, day.date),
          })}
        />
      </div>
    </div>
  )
})

export default CalendarDay
