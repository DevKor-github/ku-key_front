import { css } from '@styled-system/css'

import * as s from '@/features/HomeCalendar/components/WeekHeader/style.css'
import { daysOfWeek, daysOfWeekShort } from '@/lib/calendar/days-of-week'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const WeekHeader = () => {
  const isMobile = useMediaQueryByName('smDown')
  const weekText = isMobile ? daysOfWeekShort : daysOfWeek
  return (
    <div className={s.Wrapper}>
      {weekText.map(day => (
        <div key={day} className={s.DayWrapper}>
          <p className={css({ textStyle: 'body3_M', color: 'darkGray.2' })}>{day}</p>
        </div>
      ))}
    </div>
  )
}

export default WeekHeader
