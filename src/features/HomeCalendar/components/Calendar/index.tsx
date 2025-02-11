import { css } from '@styled-system/css'
import { isEqual } from 'date-fns'

import { useCalendar } from '@/domain/HomeCalendar/utils/useCalendar'
import * as s from '@/features/HomeCalendar/components/Calendar/style.css'
import CalendarDay from '@/features/HomeCalendar/components/CalendarDay'
import WeekHeader from '@/features/HomeCalendar/components/WeekHeader'
import { GetDailyCalendarDataResponseDto } from '@/packages/api/ku-key/models'

type Props = {
  calendarEvent: GetDailyCalendarDataResponseDto[]
}

const DesktopCalendar = ({ calendarEvent }: Props) => {
  const { calendar, handleSetSelectedDate, selectedDate, today } = useCalendar()
  return (
    <div className={s.Wrapper}>
      <WeekHeader />
      <div className={s.MonthWrapper}>
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className={s.WeekWrapper}>
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
                    <CalendarDay
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

export default DesktopCalendar
