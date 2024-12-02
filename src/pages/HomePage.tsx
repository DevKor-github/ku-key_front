import { css } from '@styled-system/css'
import { Suspense } from 'react'

import HomeCarousel from '@/components/home/Carousel'
import LoadingScreen from '@/components/ui/spinner'
import HomeCalendar from '@/features/HomeCalendar/components'
import HomeClub from '@/features/HomeClub/components'
import HomeInstitution from '@/features/HomeInstitution/components'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray' })}>
        <HomeCarousel />
        <HomeCalendar />
        <HomeInstitution />
        <HomeClub />
      </main>
    </Suspense>
  )
}

export default HomePage
