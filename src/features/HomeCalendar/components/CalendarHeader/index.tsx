import { css } from '@styled-system/css'

import * as s from './style.css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const CalendarHeader = () => {
  const today = new Date()
  const isMobile = useMediaQueryByName('smDown')

  return (
    <div className={s.Wrapper}>
      <p className={css({ textStyle: { base: 'display2', smDown: 'heading3_L' } })}>
        {today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}
      </p>
      {!isMobile && (
        <div className={s.DayTextWrapper}>
          <p className={css({ fontSize: 25, fontWeight: 700 })}>{daysOfWeek[today.getDay()]}</p>
        </div>
      )}
    </div>
  )
}

export default CalendarHeader
