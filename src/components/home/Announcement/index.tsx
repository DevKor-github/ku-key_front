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
        gap: 10,
      })}
    >
      <CalendarSection />
      <SchoolInstitutionSection />
    </section>
  )
}

export default Announcement
