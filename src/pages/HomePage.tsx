import { css } from '@styled-stytem/css'

import Announcement from '@/components/home/Announcement'
import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'

const HomePage = () => {
  return (
    <main className={css({ display: 'flex', flexDir: 'column' })}>
      <HomeCarousel />
      <Announcement />
      <Club />
    </main>
  )
}

export default HomePage
