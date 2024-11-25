import { useAtomValue } from 'jotai'

import SectionTitle from '@/components/home/Announcement/SectionTitle'
import Calendar from '@/features/HomeCalendar/components/Calendar'
import CalendarEvent from '@/features/HomeCalendar/components/CalendarEvent'
import CalendarHeader from '@/features/HomeCalendar/components/CalendarHeader'
import * as s from '@/features/HomeCalendar/components/style.css'
import { useReadCalendar } from '@/features/HomeCalendar/hooks/useReadCalendar'
import { todayAtom } from '@/lib/store/calendar'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const HomeCalendar = () => {
  const today = useAtomValue(todayAtom)
  const { data: calendarEvent } = useReadCalendar(today.getFullYear(), today.getMonth() + 1)
  const isMobile = useMediaQueryByName('smDown')
  return (
    <section className={s.Wrapper}>
      <SectionTitle title="Calendar" description="Check your academic schedule" link="/calendar" />
      <div className={s.CalendarWithEvent}>
        <div className={s.CalendarCard}>
          <CalendarHeader />
          <Calendar calendarEvent={calendarEvent} />
        </div>
        {!isMobile && <CalendarEvent calendarEvent={calendarEvent} />}
      </div>
    </section>
  )
}

export default HomeCalendar
