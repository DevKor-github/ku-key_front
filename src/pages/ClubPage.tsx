import { css, cva } from '@styled-system/css'
import { ChevronDown } from 'lucide-react'
import { useCallback, useState } from 'react'

import { useGetClubSearch, usePostClubLike } from '@/api/hooks/institution'
import CategoryDrawer from '@/components/club/CategoryDrawer'
import CategorySelector from '@/components/club/CategorySelector'
import ClubCard from '@/components/club/ClubCard'
import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'
import SearchArea from '@/components/club/SearchArea'
import MetaTag from '@/components/MetaTag'
import { Checkbox } from '@/components/ui/checkbox'
import ClubModal from '@/components/ui/modal/ClubModal'
import { ClubInterface } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import useDrawer from '@/util/hooks/useDrawer'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const ClubPage = () => {
  const isLogin = useAuth().authState ?? false
  const isMobile = useMediaQueryByName('smDown')

  const [query, setQuery] = useQueryParams<{
    category: CategoryType
    keyword: string
    sortBy: 'like' | null
    wishList: boolean
  }>()

  const { data } = useGetClubSearch({ ...query, isLogin })
  const { mutate: likeClub } = usePostClubLike()

  const setCategory = useCallback(
    (target: CategoryType) => {
      setQuery({ ...query, category: target })
    },
    [setQuery, query],
  )

  const handleSubmit = useCallback(
    (inputKeyword: string) => {
      if (inputKeyword === '') setQuery({ ...query, keyword: '' })
      else setQuery({ ...query, keyword: inputKeyword })
    },
    [setQuery, query],
  )

  const clearKeyword = useCallback(() => {
    setQuery({ ...query, keyword: '' })
  }, [setQuery, query])

  const handleLikeClick = useCallback(
    (clubId: number) => {
      if (isLogin) likeClub({ clubId, queryParams: { ...query, isLogin } })
      else alert('Please sign in to use!')
    },
    [likeClub, query, isLogin],
  )

  const handleWishList = useCallback(() => {
    if (isLogin) setQuery({ ...query, wishList: !query.wishList })
    else alert('Please sign in to use!')
  }, [setQuery, isLogin, query])

  const [selectedClub, setSelectedClub] = useState<ClubInterface | null>(null)

  const handleModalLayoutClose = useCallback(() => {
    setSelectedClub(null)
  }, [])

  const { open: openDrawer, close: closeDrawer } = useDrawer()

  const handleCategoryDrawerOpen = useCallback(() => {
    openDrawer(
      <CategoryDrawer
        setCategory={setCategory}
        close={closeDrawer}
        resultCount={data?.length ?? 0}
        selectedCategory={query.category}
      />,
    )
  }, [openDrawer, setCategory, closeDrawer, data?.length, query.category])

  return (
    <>
      <ClubModal clubData={selectedClub} handleModalLayoutClose={handleModalLayoutClose} />
      <MetaTag
        title="Club"
        description="Meet the various clubs at Korea University! Find out what clubs there are and what each club's characteristics are."
        keywords="club, clubs"
      />
      <div
        className={css({
          h: { base: '400px', lgDown: '300px', mdDown: '200px', smDown: '150px' },
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: { base: 64, lgDown: 48, mdDown: 32, smDown: 24 },
          fontWeight: 700,
          color: 'white',
          px: { base: 58, lgDown: 20, mdDown: 5, smDown: '30px' },
          display: 'flex',
          alignItems: 'center',
        })}
        style={{ backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/home/clubBanner.webp)` }}
      >
        Club
      </div>
      <div
        className={css({
          px: { base: 58, lgDown: 20, mdDown: 5, smDown: 0 },
          pt: { base: 29, lgDown: 20, mdDown: 10, smDown: 2.5 },
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          bgColor: { base: 'bg.gray', smDown: 'white' },
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: { base: 19, mdDown: 10 },
            width: 'full',
            maxW: '1300px',
          })}
        >
          <CategorySelector curCategory={query.category} setCategory={setCategory} />
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
                  <SearchArea onSubmit={handleSubmit} clearKeywordParam={clearKeyword} />
                  <div
                    className={css({
                      display: { base: 'flex', mdDown: 'none' },
                      alignItems: 'center',
                      gap: 2.5,
                      px: 2.5,
                    })}
                  >
                    <Checkbox checked={query.wishList} onCheckedChange={handleWishList} />
                    <p className={css({ textStyle: 'heading4_M', color: 'darkGray.2' })}>View only I like</p>
                  </div>
                </div>
              </div>
              <button
                className={cva({
                  base: {
                    display: { base: 'none', smDown: 'flex' },
                    gap: 1,
                    border: '1px solid {colors.lightGray.1}',
                    rounded: '6px',
                    px: 2.5,
                    py: 1,
                    alignItems: 'center',
                    color: 'darkGray.2',
                    fontSize: 14,
                    lineHeight: 1.2,
                    fontWeight: 400,
                  },
                  variants: {
                    selected: {
                      true: {
                        borderColor: 'red.2',
                        color: 'red.2',
                        gap: '3px',
                      },
                    },
                  },
                })({ selected: query.category !== null })}
                onClick={handleCategoryDrawerOpen}
              >
                <p>club field</p>
                {query.category !== null && (
                  <div className={css({ w: '18px', h: '18px' })}>
                    {CATEGORY_LIST.find(category => category.type === query.category)?.icon({ color: '#E70000' })}
                  </div>
                )}
                <ChevronDown size={14} />
              </button>
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
              <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 15, mdDown: 10, smDown: 2.5 } })}>
                {data?.length ? (
                  data?.map(club => (
                    <button
                      key={`clubId-${club.clubId}`}
                      className={css({ w: 'full', textAlign: 'left' })}
                      onClick={() => {
                        isMobile && setSelectedClub(club)
                      }}
                    >
                      <ClubCard clubData={club} handleLikeClick={handleLikeClick} />
                    </button>
                  ))
                ) : (
                  <div className={css({ color: 'darkGray.1', fontSize: { base: 20, mdDown: 16 } })}>
                    No search results
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClubPage
