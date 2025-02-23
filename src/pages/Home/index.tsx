import { Suspense } from 'react'

import * as s from './style.css'

import { LoadingScreen, LoadingSpinner } from '@/components/ui/spinner'
import HomeBanner from '@/features/HomeBanner'
import HomeClubs from '@/features/HomeClubs/components/Clubs'
import HomeContentsBase from '@/features/HomeContents/components/Base'
import HomeInstitution from '@/features/HomeInstitution'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={s.Wrapper}>
        {/* <Suspense fallback={<LoadingSpinner />}>
          <HomeBanner />
        </Suspense> */}
        <section className={s.Section}>
          <HomeContentsBase />
        </section>
        {/* <HomeInstitution />
        <Suspense fallback={<LoadingSpinner />}>
          <HomeClubs />
        </Suspense>
        <section>
          <h1>Home Community</h1>
        </section> */}
      </main>
    </Suspense>
  )
}

export default HomePage
