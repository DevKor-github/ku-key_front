import { css } from '@styled-system/css'
import { Suspense } from 'react'

import { LoadingScreen } from '@/components/ui/spinner'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray' })}></main>
    </Suspense>
  )
}

export default HomePage
