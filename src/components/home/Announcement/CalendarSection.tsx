import { css } from '@styled-stytem/css'

import CalendarContainer from '@/components/calendar/CalendarContainer'
import CalendarEvent from '@/components/calendar/CalendarEvent'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import SectionTitle from '@/components/home/Announcement/SectionTitle'

const CalendarSection = () => {
  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
      <SectionTitle title="Calendar" description="Check your academic schedule" link="/calendar" />
      <div className={css({ display: 'flex', flexDir: 'row', gap: '38px' })}>
        <div
          className={css({
            display: 'inline-flex',
            alignItems: 'flex-start',
            pt: '30px',
            pl: 10,
            pr: 5,
            pb: 2.5,
            rounded: 20,
          })}
        >
          <CalendarHeader />
          <CalendarContainer />
        </div>
        <CalendarEvent />
      </div>
    </section>
  )
}

export default CalendarSection
