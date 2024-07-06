import { css } from '@styled-stytem/css'

import Announcement from '@/components/home/Announcement'
import HomeCarousel from '@/components/home/Carousel'

const HomePage = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <HomeCarousel />
      <Announcement />
    </div>
  )
}

export default HomePage
