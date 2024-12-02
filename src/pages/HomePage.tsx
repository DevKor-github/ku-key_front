import { css } from '@styled-system/css'
import { Suspense } from 'react'

import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'
import LoadingScreen from '@/components/ui/spinner'
import HomeCalendar from '@/features/HomeCalendar/components'
import HomeInstitution from '@/features/HomeInstitution/components'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray' })}>
        <HomeCarousel />
        <HomeCalendar />
        <HomeInstitution />
        <Club />
      </main>
    </Suspense>
  )
}

export default HomePage
