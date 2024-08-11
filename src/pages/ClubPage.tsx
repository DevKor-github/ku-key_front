import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'

import { useGetClubSearch } from '@/api/hooks/club'
import { GetClubRequest } from '@/api/types/club'
import CategorySelector from '@/components/club/CategorySelector'
import ClubCard from '@/components/club/ClubCard'
import { CategoryType } from '@/components/club/constants'
import SearchArea from '@/components/club/SearchArea'

const ClubPage = () => {
  const [query, setQuery] = useState<GetClubRequest>({
    keyword: '',
    category: null,
    sortBy: 'like',
    wishList: false,
  })

  const { data } = useGetClubSearch(query)

  const setCategory = useCallback((target: CategoryType) => {
    setQuery(p => {
      return { ...p, category: target }
    })
  }, [])

  const handleSubmit = useCallback((inputKeyword: string) => {
    setQuery(p => {
      return { ...p, keyword: inputKeyword }
    })
  }, [])

  return (
    <>
      <div
        className={css({
          h: '400px',
          bgColor: 'red.3',
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          fontSize: 64,
          fontWeight: 700,
          color: 'white',
          px: 64,
          display: 'flex',
          alignItems: 'center',
        })}
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
            {data?.map(club => <ClubCard key={club.clubId} clubData={club} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ClubPage
