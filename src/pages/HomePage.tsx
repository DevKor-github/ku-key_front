import { css } from '@styled-stytem/css'

import Announcement from '@/components/home/Announcement'
import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'

const HomePage = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <HomeCarousel />
      <Announcement />
      <Club />
    </div>
  )
}

export default HomePage
