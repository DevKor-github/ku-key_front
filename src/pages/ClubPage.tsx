import { css } from '@styled-stytem/css'
import { useState } from 'react'

import CategorySelector from '@/components/club/CategorySelector'
import { CategoryType } from '@/components/club/constants'
import SearchArea from '@/components/club/SearchArea'

const ClubPage = () => {
  const [category, setCategory] = useState<CategoryType>('ALL')
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
        <CategorySelector curCategory={category} setCategory={setCategory} />
        <div className={css({ display: 'flex', flexDir: 'column', gap: 20 })}>
          <SearchArea />
        </div>
      </div>
    </>
  )
}

export default ClubPage
