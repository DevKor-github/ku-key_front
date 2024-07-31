import { css } from '@styled-stytem/css'

import CalendarSection from '@/components/home/Announcement/CalendarSection'
import SchoolInstitutionSection from '@/components/home/Announcement/SchoolInstitutionSection'

const Announcement = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDir: 'row',
        bgColor: 'bg.gray',
        // py: '39px',
        justifyContent: 'space-between',
        px: 'calc((100vw - 1027px)/2)',
        flexWrap: 'wrap',
      })}
    >
      <CalendarSection />
      <SchoolInstitutionSection />
    </section>
  )
}

export default Announcement
