import { css } from '@styled-stytem/css'

import CalendarContainer from '@/components/calendar/CalendarContainer'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import SectionTitle from '@/components/home/Announcement/SectionTitle'

const CalendarSection = () => {
  return (
    <section className={css({ display: 'flex', flexDir: 'column' })}>
      <SectionTitle title="Calendar" description="Check your academic schedule" link="/calendar" />
      <div
        className={css({
          display: 'inline-flex',
          alignItems: 'flex-start',
          pt: '30px',
          pl: 10,
          pr: 5,
          pb: 2.5,
          bgColor: 'white',
          rounded: 20,
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        })}
      >
        <CalendarHeader />
        <CalendarContainer />
      </div>
    </section>
  )
}

export default CalendarSection
