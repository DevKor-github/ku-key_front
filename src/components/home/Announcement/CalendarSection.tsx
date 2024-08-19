import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai'

import { useGetCalendar } from '@/api/hooks/calendar'
import CalendarContainer from '@/components/calendar/CalendarContainer'
import CalendarEvent from '@/components/calendar/CalendarEvent'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import SectionTitle from '@/components/home/Announcement/SectionTitle'
import { todayAtom } from '@/lib/store/calendar'

const CalendarSection = () => {
  const today = useAtomValue(todayAtom)
  const { data: calendarEvent } = useGetCalendar(today.getFullYear(), today.getMonth() + 1)
  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        flexDir: 'column',
        maxW: 1026,
      })}
    >
      <SectionTitle title="Calendar" description="Check your academic schedule" link="/calendar" />
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5, maxW: 1026, w: 'full' })}>
        <div
          className={css({
            display: 'inline-flex',
            w: 'full',
            alignItems: 'flex-start',
            pt: '30px',
            pl: 10,
            pr: 5,
            pb: 5,
            rounded: 20,
            bgColor: 'white',
          })}
        >
          <CalendarHeader />
          <CalendarContainer calendarEvent={calendarEvent} />
        </div>
        <CalendarEvent calendarEvent={calendarEvent} />
      </div>
    </section>
  )
}

export default CalendarSection
