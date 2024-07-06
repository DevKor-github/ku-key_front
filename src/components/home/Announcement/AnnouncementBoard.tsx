import { css } from '@styled-stytem/css'

import CalendarSection from '@/components/home/Announcement/CalendarSection'
import SchoolInstitutionSection from '@/components/home/Announcement/SchoolInstitution'

const AnnouncementBoard = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        bgColor: 'white',
        py: '39px',
        justifyContent: 'space-between',
        px: 'calc((100vw - 1027px)/2)',
      })}
    >
      <SchoolInstitutionSection />
      <CalendarSection />
    </div>
  )
}

export default AnnouncementBoard
