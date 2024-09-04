import { css } from '@styled-stytem/css'
import { useCallback, useMemo } from 'react'

import { useGetClubSearch, usePostClubLike } from '@/api/hooks/institution'
import ClubBGImg from '@/assets/ClubBGImg.png'
import CategorySelector from '@/components/club/CategorySelector'
import ClubCard from '@/components/club/ClubCard'
import { CategoryType } from '@/components/club/constants'
import SearchArea from '@/components/club/SearchArea'
import { Checkbox } from '@/components/ui/checkbox'
import { useAuth } from '@/util/auth/useAuth'
import useScrollUp from '@/util/useScrollUp'
import { useSearch } from '@/util/useSearch'

const ClubPage = () => {
  useScrollUp()

  const isLogin = useAuth().authState ?? false

  const { searchParam, handleSetParam, deleteParam } = useSearch()
  const query = useMemo(
    () => ({
      category: searchParam.get('category') as CategoryType,
      keyword: searchParam.get('keyword'),
      sortBy: searchParam.get('like') as 'like' | null,
      wishList: searchParam.get('wishlist') === 'true',
      isLogin,
    }),
    [searchParam, isLogin],
  )
  const { data } = useGetClubSearch(query)
  const { mutate: likeClub } = usePostClubLike()

  const setCategory = useCallback(
    (target: CategoryType) => {
      if (target === null) deleteParam('category')
      else handleSetParam('category', target)
    },
    [deleteParam, handleSetParam],
  )

  const handleSubmit = useCallback(
    (inputKeyword: string) => {
      if (inputKeyword === '') deleteParam('keyword')
      else handleSetParam('keyword', inputKeyword)
    },
    [deleteParam, handleSetParam],
  )

  const clearKeyword = useCallback(() => {
    deleteParam('keyword')
  }, [deleteParam])

  const handleLikeClick = useCallback(
    (clubId: number) => {
      if (isLogin) likeClub({ clubId, queryParams: query })
      else alert('Please sign in to use!')
    },
    [likeClub, query, isLogin],
  )

  const handleWishList = useCallback(() => {
    if (isLogin) handleSetParam('wishlist', `${!query.wishList}`)
    else alert('Please sign in to use!')
  }, [handleSetParam, query.wishList, isLogin])

  return (
    <>
      <div
        className={css({
          h: { base: '400px', mdDown: '200px' },
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: { base: 64, mdDown: 32 },
          fontWeight: 700,
          color: 'white',
          px: { base: 64, mdDown: 5 },
          display: 'flex',
          alignItems: 'center',
        })}
        style={{ backgroundImage: `url(${ClubBGImg})` }}
      >
        Club
      </div>
      <div
        className={css({
          px: { base: 64, mdDown: 5 },
          pt: 29,
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          bgColor: 'bg.gray',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 19,
            width: 'full',
            maxW: '1300px',
          })}
        >
          <CategorySelector curCategory={query.category} setCategory={setCategory} />
          <div className={css({ display: 'flex', flexDir: 'column', gap: 20, pb: 30 })}>
            <div className={css({ display: 'flex', justifyContent: 'center' })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: 4 })}>
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
            <div className={css({ display: 'flex', flexDir: 'column', gap: 11 })}>
              {query.keyword && (
                <div className={css({ fontSize: 30, fontWeight: 700, color: 'darkGray.1' })}>
                  {`'${query.keyword}' Search Results`}
                </div>
              )}
              <div className={css({ display: 'flex', flexDir: 'column', gap: 15 })}>
                {data?.length ? (
                  data?.map(club => <ClubCard key={club.clubId} clubData={club} handleLikeClick={handleLikeClick} />)
                ) : (
                  <div className={css({ color: 'darkGray.1', fontSize: 20 })}>No search results</div>
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
