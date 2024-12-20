import { css } from '@styled-system/css'

import CategoryButton from '@/components/club/CategoryButton'
import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'

interface CategorySelectorProps {
  curCategory: CategoryType
  setCategory: (target: CategoryType) => void
}
const CategorySelector = ({ curCategory, setCategory }: CategorySelectorProps) => {
  return (
    <div
      className={css({
        display: { base: 'flex', smDown: 'none' },
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      })}
    >
      {CATEGORY_LIST.map((category, ind) => (
        <CategoryButton
          key={ind}
          text={category.text}
          icon={category.icon}
          onClick={() => setCategory(category.type)}
          selected={curCategory === category.type}
        />
      ))}
    </div>
  )
}

export default CategorySelector
