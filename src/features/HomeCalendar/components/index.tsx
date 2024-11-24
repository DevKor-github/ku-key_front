import { css } from '@styled-system/css'
import { useAtomValue } from 'jotai'

import SectionTitle from '@/components/home/Announcement/SectionTitle'
import Calendar from '@/features/HomeCalendar/components/Calendar'
import CalendarEvent from '@/features/HomeCalendar/components/CalendarEvent'
import CalendarHeader from '@/features/HomeCalendar/components/CalendarHeader'
import { useReadCalendar } from '@/features/HomeCalendar/hooks/useReadCalendar'
import { todayAtom } from '@/lib/store/calendar'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const HomeCalendar = () => {
  const today = useAtomValue(todayAtom)
  const { data: calendarEvent } = useReadCalendar(today.getFullYear(), today.getMonth() + 1)
  const isMobile = useMediaQueryByName('smDown')
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
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5, maxW: 1026, w: 'full', smDown: { px: '1rem' } })}>
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
            smDown: { flexDir: 'column', p: '1rem 1rem 0', border: '1px solid {colors.lightGray.1}' },
          })}
        >
          <CalendarHeader />
          <Calendar calendarEvent={calendarEvent} />
        </div>
        {!isMobile && <CalendarEvent calendarEvent={calendarEvent} />}
      </div>
    </section>
  )
}

export default HomeCalendar
