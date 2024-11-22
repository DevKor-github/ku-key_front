import { css } from '@styled-system/css'
import { RotateCw } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useGetCachedClubSearchResult } from '@/api/hooks/institution'
import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'
import MobileCategoryChip from '@/components/club/MobileCategoryChip'
import { useQueryParams } from '@/util/hooks/useQueryParams'

interface CategoryDrawerProps {
  close: () => void
  setCategory: (target: CategoryType) => void
}

const CategoryDrawer = ({ setCategory, close }: CategoryDrawerProps) => {
  const [searchParam] = useQueryParams<{
    category: CategoryType
    keyword: string
    sortBy: 'like' | null
    wishList: boolean
  }>()

  const getClubSearchResult = useGetCachedClubSearchResult()
  const selectedCategory = searchParam.category
  const [resultCount, setResultCount] = useState(0)

  useEffect(() => {
    ;(async () => {
      const searchResult = await getClubSearchResult(searchParam)
      setResultCount(searchResult.length || 0)
    })()
  }, [getClubSearchResult, searchParam])

  return (
    <div className={css({ pt: '15px', position: 'relative', h: '390px', px: '20px' })}>
      <h3 className={css({ fontWeight: 600, fontSize: 16, mb: '14px' })}>choose the club field</h3>
      <div className={css({ display: 'flex', flexWrap: 'wrap', rowGap: 2, columnGap: 1 })}>
        {CATEGORY_LIST.map(
          category =>
            category.type && (
              <MobileCategoryChip
                key={category.type}
                icon={category.icon}
                text={category.text}
                selected={category.type === selectedCategory}
                onClick={() => setCategory(category.type)}
              />
            ),
        )}
      </div>
      <div
        className={css({
          position: 'absolute',
          top: '280px',
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '0.5px solid {colors.lightGray.2}',
          pt: 2.5,
          px: '20px',
        })}
      >
        <button
          className={css({
            fontSize: 14,
            fontWeight: 500,
            color: 'darkGray.1',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          })}
          onClick={() => setCategory(null)}
        >
          <RotateCw size={14} />
          <span>Reset</span>
        </button>
        <button
          className={css({
            w: '180px',
            p: 2.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'white',
            bgColor: 'black.2',
            rounded: 'full',
          })}
          onClick={close}
        >
          Found&nbsp;<strong className={css({ fontWeight: 700 })}>{resultCount}</strong>&nbsp;Results
        </button>
      </div>
    </div>
  )
}
export default CategoryDrawer
