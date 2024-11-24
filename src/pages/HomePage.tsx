import { css } from '@styled-system/css'
import { Suspense } from 'react'

import Announcement from '@/components/home/Announcement'
import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'
import LoadingSpinner from '@/components/ui/spinner/inde'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className={css({ display: 'flex', flexDir: 'column' })}>
        {/* <HomeCarousel /> */}
        <Announcement />
        {/* <Club /> */}
      </main>
    </Suspense>
  )
}

export default HomePage
