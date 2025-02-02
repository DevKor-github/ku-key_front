import { Suspense } from 'react'

import * as s from './style.css'

import MetaTag from '@/components/MetaTag'
import { LoadingSpinner } from '@/components/ui/spinner'
import ClubList from '@/features/Club/components/ClubList'
import DesktopCategorySelector from '@/features/Club/components/DekstopCategorySelector.tsx'
import SearchForm from '@/features/Club/components/SearchForm'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const ClubPage = () => {
  const isDesktop = !useMediaQueryByName('smDown')

  return (
    <>
      <MetaTag
        title="Club"
        description="Meet the various clubs at Korea University! Find out what clubs there are and what each club's characteristics are."
        keywords="club, clubs"
      />
      <div
        className={s.Banner}
        style={{ backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/clubBanner.webp)` }}
      >
        Club
      </div>
      <div className={s.ContentsWrapper}>
        <div className={s.Contents}>
          <SearchForm />
          {isDesktop && <DesktopCategorySelector />}
          <Suspense fallback={<LoadingSpinner />}>
            <ClubList />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ClubPage
