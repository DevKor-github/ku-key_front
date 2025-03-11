import { css } from '@styled-system/css'
import { Suspense } from 'react'

import { LoadingScreen, LoadingSpinner } from '@/components/ui/spinner'
import HomeBanner from '@/features/HomeBanner'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray' })}>
        <Suspense fallback={<LoadingSpinner />}>
          <HomeBanner />
        </Suspense>
      </main>
    </Suspense>
  )
}

export default HomePage
