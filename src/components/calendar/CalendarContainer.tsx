import { css } from '@styled-stytem/css'

import { useGetCalendar } from '@/api/hooks/calendar'
import Day from '@/components/calendar/Day'
import WeekHeader from '@/components/calendar/WeekHeader'
import { useCalendar } from '@/util/useCalendar'

const CalendarContainer = () => {
  const { calendar, handleSetDate, date, today } = useCalendar()
  const { data: calendarEvent } = useGetCalendar(today.getFullYear(), today.getMonth() + 1)
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
        {calendar.map((week, index) => (
          <div
            key={index}
            className={css({
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            })}
          >
            {week.map((day, index) => (
              <button key={index} onClick={() => handleSetDate(day.date)}>
                <Day day={day} date={date} eventCount={0} />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarContainer
