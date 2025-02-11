import { Suspense } from 'react'

import * as s from './style.css'

import { LoadingScreen, LoadingSpinner } from '@/components/ui/spinner'
import HomeBanner from '@/features/HomeBanner'
import HomeInstitution from '@/features/HomeInstitution'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={s.Wrapper}>
        <Suspense fallback={<LoadingSpinner />}>
          <HomeBanner />
        </Suspense>
        <HomeInstitution />
        <section>
          <h1>Home ETC, BROADCAST</h1>
        </section>
        <section>
          <h1>Home Club</h1>
        </section>
        <section>
          <h1>Home Community</h1>
        </section>
      </main>
    </Suspense>
  )
}

export default HomePage
