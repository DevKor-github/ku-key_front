import { css } from '@styled-system/css'

import { daysOfWeek } from '@/lib/calendar/days-of-week'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const CalendarHeader = () => {
  const today = new Date()
  const isMobile = useMediaQueryByName('smDown')
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 117,
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      })}
    >
      <p className={css({ textStyle: { base: 'display1', smDown: 'heading3_L' } })}>
        {today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}
      </p>
      {!isMobile && (
        <div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 })}>
          <p className={css({ fontSize: 25, fontWeight: 700 })}>{daysOfWeek[today.getDay()]}</p>
        </div>
      )}
    </div>
  )
}

export default CalendarHeader
