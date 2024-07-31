import { css } from '@styled-stytem/css'

import CalendarContainer from '@/components/calendar/CalendarContainer'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import SectionTitle from '@/components/home/Announcement/SectionTitle'

const CalendarSection = () => {
  return (
    <section className={css({ display: 'flex', w: 500, flexDir: 'column' })}>
      <SectionTitle title="Calendar" description="Check your academic schedule" link="/calendar" />
      <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
        <CalendarHeader />
        <CalendarContainer />
      </div>
    </section>
  )
}

export default CalendarSection
