import { css } from '@styled-stytem/css'
import { isEqual } from 'date-fns'

import { CalendarResponse } from '@/api/types/calendar'
import Day from '@/components/calendar/Day'
import WeekHeader from '@/components/calendar/WeekHeader'
import { useCalendar } from '@/util/useCalendar'

interface CalendarContainerProps {
  calendarEvent: CalendarResponse[]
}
const CalendarContainer = ({ calendarEvent }: CalendarContainerProps) => {
  const { calendar, handleSetSelectedDate, selectedDate, today } = useCalendar()
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        pt: '13px',
        px: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      })}
    >
      <WeekHeader />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
        })}
      >
        {calendar.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className={css({
              display: 'flex',
              w: 'full',
              maxW: 410,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            })}
          >
            {week.map(
              (day, index) =>
                calendarEvent[weekIndex * 7 + index] && (
                  <button
                    key={index}
                    onClick={() => handleSetSelectedDate(day.date)}
                    disabled={
                      calendarEvent[weekIndex * 7 + index] === undefined ||
                      !calendarEvent[weekIndex * 7 + index].eventCount
                    }
                    className={css({
                      all: 'unset',
                      cursor: calendarEvent[weekIndex * 7 + index].eventCount ? 'pointer' : 'default',
                    })}
                  >
                    <Day
                      day={day}
                      isToday={isEqual(today.toLocaleDateString(), day.date.toLocaleDateString())}
                      selectedDate={selectedDate}
                      eventCount={calendarEvent[weekIndex * 7 + index].eventCount}
                    />
                  </button>
                ),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarContainer
