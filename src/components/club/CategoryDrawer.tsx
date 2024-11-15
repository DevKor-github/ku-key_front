import { css } from '@styled-system/css'
import { RotateCw } from 'lucide-react'

import { CATEGORY_LIST, CategoryType } from '@/components/club/constants'
import MobileCategoryChip from '@/components/club/MobileCategoryChip'

interface CategoryDrawerProps {
  close: () => void
  setCategory: (target: CategoryType) => void
  resultCount: number
}
const CategoryDrawer = ({ setCategory, close, resultCount }: CategoryDrawerProps) => {
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
          <strong className={css({ fontWeight: 700 })}>{resultCount}</strong>개의 결과보기
        </button>
      </div>
    </div>
  )
}
export default CategoryDrawer
