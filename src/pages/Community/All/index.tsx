import { Suspense } from 'react'

import * as s from './style.css'

import { LoadingScreen, LoadingSpinner } from '@/components/ui/spinner'
import CommunityOutlet from '@/features/Community/CommunityOutlet'
import CommunitySelectTab from '@/features/Community/CommunitySelectTab'

const CommunityAllPage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={s.Wrapper}>
        <CommunitySelectTab />
        <Suspense fallback={<LoadingSpinner />}>
          <CommunityOutlet />
        </Suspense>
      </main>
    </Suspense>
  )
}

export default CommunityAllPage
