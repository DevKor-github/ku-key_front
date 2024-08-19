import { css } from '@styled-stytem/css'
import { useCallback, useMemo } from 'react'

import { useGetClubSearch, usePostClubLike } from '@/api/hooks/club'
import CategorySelector from '@/components/club/CategorySelector'
import ClubCard from '@/components/club/ClubCard'
import { CategoryType } from '@/components/club/constants'
import SearchArea from '@/components/club/SearchArea'
import { useSearch } from '@/util/useSearch'
import ClubBGImg from '@/assets/ClubBGImg.png'

const ClubPage = () => {
  const { searchParam, handleSetParam, deleteParam } = useSearch()
  const query = useMemo(
    () => ({
      category: searchParam.get('category') as CategoryType,
      keyword: searchParam.get('keyword'),
      sortBy: searchParam.get('like') as 'like' | null,
      wishList: searchParam.get('wishlist') === 'true',
    }),
    [searchParam],
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

  const handleLikeClick = useCallback(
    (clubId: number) => {
      likeClub({ clubId, queryParams: query })
    },
    [likeClub, query],
  )

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
      <div className={css({ px: 64, pt: 29, display: 'flex', flexDir: 'column', gap: 19, bgColor: 'bg.gray' })}>
        <CategorySelector curCategory={query.category} setCategory={setCategory} />
        <div className={css({ display: 'flex', flexDir: 'column', gap: 20, pb: 30 })}>
          <div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center' })}>
            <SearchArea onSubmit={handleSubmit} />
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 15 })}>
            {data?.map(club => <ClubCard key={club.clubId} clubData={club} handleLikeClick={handleLikeClick} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ClubPage
