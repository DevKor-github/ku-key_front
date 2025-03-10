import { Suspense } from 'react'

import * as s from './style.css'

import { LoadingScreen } from '@/components/ui/spinner'
import CommunitySelectTab from '@/features/Community/CommunitySelectTab'

const CommunityAllPage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className={s.Wrapper}>
        <CommunitySelectTab />
      </main>
    </Suspense>
  )
}

export default CommunityAllPage
