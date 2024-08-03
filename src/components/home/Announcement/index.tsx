import { css } from '@styled-stytem/css'

import CalendarSection from '@/components/home/Announcement/CalendarSection'
import SchoolInstitutionSection from '@/components/home/Announcement/SchoolInstitutionSection'

const Announcement = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'column',
        bgColor: 'bg.gray',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // px: 'calc((100vw - 1027px)/2)',
        flexWrap: 'wrap',
        gap: 10,
      })}
    >
      <CalendarSection />
      <SchoolInstitutionSection />
    </section>
  )
}

export default Announcement
