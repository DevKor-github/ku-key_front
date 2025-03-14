import { RotateCw } from 'lucide-react'
import { useEffect, useState } from 'react'

import * as s from './style.css'

import { CATEGORY_LIST, CategoryType } from '@/domain/Club/constants'
import { useGetCachedClubSearchResult } from '@/domain/Club/hooks/useGetClubSearch'
import CategoryChip from '@/features/Club/components/CategoryChip'
import { ClubSearchParams } from '@/types/club'
import { useQueryParams } from '@/util/hooks/useQueryParams'

interface CategoryDrawerProps {
  close: () => void
}

const CategoryDrawer = ({ close }: CategoryDrawerProps) => {
  const [param, setParam] = useQueryParams<ClubSearchParams>()

  const getClubSearchResult = useGetCachedClubSearchResult(param)
  const selectedCategory = param.category
  const [resultCount, setResultCount] = useState(0)

  const setCategory = (target: CategoryType) => setParam({ category: target })

  useEffect(() => {
    ;(async () => {
      const searchResult = await getClubSearchResult()
      setResultCount(searchResult.length || 0)
    })()
  }, [getClubSearchResult, param])

  return (
    <div className={s.Wrapper}>
      <h3 className={s.Instruction}>choose the club field</h3>
      <div className={s.CategoryWrapper}>
        {CATEGORY_LIST.map(
          category =>
            category.type && (
              <CategoryChip
                key={category.type}
                Icon={category.Icon}
                text={category.text}
                selected={category.type === selectedCategory}
                onClick={() => setCategory(category.type)}
              />
            ),
        )}
      </div>
      <div className={s.BottomSection}>
        <button className={s.ResetButton} onClick={() => setCategory(undefined)}>
          <RotateCw size={14} />
          <span>Reset</span>
        </button>
        <button className={s.CloseButton} onClick={close}>
          Found&nbsp;<strong className={s.CloseText}>{resultCount}</strong>&nbsp;Results
        </button>
      </div>
    </div>
  )
}
export default CategoryDrawer
