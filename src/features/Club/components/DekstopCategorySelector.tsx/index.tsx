import * as s from './style.css'

import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'
import CategoryChip from '@/features/Club/components/CategoryChip'
import { ClubSearchParams } from '@/types/club'
import { useQueryParams } from '@/util/hooks/useQueryParams'

// TODO: 바뀐 디자인 적용
const DesktopCategorySelector = () => {
  const [param, setParam] = useQueryParams<ClubSearchParams>()
  const curCategory = param.category

  const setCategory = (target: CategoryType) => setParam({ category: target })

  return (
    <div className={s.Wrapper}>
      {CATEGORY_LIST.map((category, index) => (
        <CategoryChip
          key={index}
          text={category.text}
          Icon={category.Icon}
          onClick={() => setCategory(category.type)}
          selected={curCategory === category.type}
        />
      ))}
    </div>
  )
}
export default DesktopCategorySelector
