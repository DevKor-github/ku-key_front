import { css } from '@styled-stytem/css'

import CategoryButton from '@/components/club/CategoryButton'
import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'

interface CategorySelectorProps {
  curCategory: CategoryType
  setCategory: (target: CategoryType) => void
}
const CategorySelector = ({ curCategory, setCategory }: CategorySelectorProps) => {
  return (
    <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' })}>
      {CATEGORY_LIST.map((category, ind) => (
        <CategoryButton
          key={ind}
          text={category.text}
          imgSrc={category.imgSrc}
          onClick={() => setCategory(category.text)}
          selected={curCategory === category.text}
        />
      ))}
    </div>
  )
}

export default CategorySelector
