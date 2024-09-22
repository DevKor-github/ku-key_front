import { css, cx } from '@styled-system/css'
import { isEqual } from 'date-fns'
import { memo } from 'react'

import { DayProps } from '@/types/calendar'

interface CalendarDayProps {
  isToday: boolean
  day: DayProps
  selectedDate: Date
  eventCount: number
}

const Day = memo(({ isToday, day, selectedDate, eventCount }: CalendarDayProps) => {
  const getColor = () => {
    if (day.status !== 'THIS_MONTH') return 'lightGray.1'
    if (isToday) return 'white'
    return 'black.2'
  }
  return (
    <div
      className={css({
        display: 'flex',
        w: '50px',
        h: '65px',
        pb: '5px',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        className={css({
          display: 'flex',
          pb: 2.5,
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: -1.5,
        })}
      >
        <div
          className={cx(
            css({
              display: 'flex',
              w: '50px',
              h: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              textStyle: 'heading3_L',
              rounded: 'full',
              gap: 2.5,
              border: isEqual(selectedDate, day.date) ? '1px solid red' : '1px solid transparent',
              color: getColor(),
              bgColor: isToday ? 'red.2' : 'transparent',
              transition: 'all 0.25s ease',
            }),
          )}
        >
          {day.date.getDate()}
        </div>
        <div
          className={css({
            display: 'flex',
            w: '5px',
            h: '5px',
            bgColor:
              eventCount > 0 && day.status === 'THIS_MONTH' && !isToday && !isEqual(selectedDate, day.date)
                ? 'red.2'
                : 'transparent',
            rounded: 'full',
          })}
        />
      </div>
    </div>
  )
})

export default Day
