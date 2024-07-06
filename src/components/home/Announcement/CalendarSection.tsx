import { css } from '@styled-stytem/css'

import SectionTitle from '@/components/home/Announcement/SectionTitle'

const CalendarSection = () => {
  return (
    <div className={css({ display: 'flex', w: 500, flexDir: 'column' })}>
      <SectionTitle title="Calendar" />
    </div>
  )
}

export default CalendarSection
