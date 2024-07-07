import { css } from '@styled-stytem/css'

import AnnouncementBoard from '@/components/home/Announcement/AnnouncementBoard'
import HomeTitle from '@/components/home/HomeTitle'

const Announcement = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <HomeTitle title="Announcement" navLink="" />
      <AnnouncementBoard />
    </div>
  )
}

export default Announcement
