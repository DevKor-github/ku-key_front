import { Suspense } from 'react'

import * as s from './style.css'

import MetaTag from '@/components/MetaTag'
import { LoadingSpinner } from '@/components/ui/spinner'
// import { Checkbox } from '@/components/ui/checkbox'
import ClubList from '@/features/Club/components/ClubList'
import DesktopCategorySelector from '@/features/Club/components/DekstopCategorySelector.tsx'
import SearchForm from '@/features/Club/components/SearchForm'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const ClubPage = () => {
  const isDesktop = !useMediaQueryByName('smDown')

  // const handleWishList = useDeepCompareCallback(() => {
  //   if (isLogin) setQuery({ ...query, filter: query.filter === 'like' ? undefined : 'like' })
  //   else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
  // }, [query, isLogin])

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
          {isDesktop && <DesktopCategorySelector />}
          <SearchForm />
          <Suspense fallback={<LoadingSpinner />}>
            <ClubList />
          </Suspense>
        </div>
      </div>
      {/* <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: { base: 19, mdDown: 10 },
            width: 'full',
            maxW: '1300px',
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: { base: 20, mdDown: 10, smDown: 0 },
              pb: { base: 30, smDown: 0 },
            })}
          >
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                alignItems: 'flex-end',
                gap: 2.5,
                mb: 2.5,
                smDown: { px: 5 },
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'center', w: 'full' })}>
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    transform: { base: 'translate3d(80px, 0, 0)', mdDown: 'initial' },
                    smDown: { w: 'full' },
                  })}
                >
                  <SearchForm />
                  <div
                    className={css({
                      display: { base: 'flex', mdDown: 'none' },
                      alignItems: 'center',
                      gap: 2.5,
                      px: 2.5,
                    })}
                  >
                    <Checkbox checked={query.filter === 'like'} onCheckedChange={handleWishList} />
                    <p className={css({ textStyle: 'heading4_M', color: 'darkGray.2' })}>View only I like</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 11,
                smDown: { px: 5, bgColor: 'bg.gray', py: 4 },
              })}
            >
              {query.keyword && (
                <div
                  className={css({
                    fontSize: { base: 30, lgDown: 24, mdDown: 18 },
                    fontWeight: 700,
                    color: 'darkGray.1',
                    smDown: { display: 'none' },
                  })}
                >
                  {`'${query.keyword}' Search Results`}
                </div>
              )}
            </div>
          </div>
        </div> */}
    </>
  )
}

export default ClubPage
