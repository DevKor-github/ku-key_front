import { css, cva } from '@styled-stytem/css'

import { FilterType } from '@/types/timetable'
import { filterTypeMap } from '@/util/timetableUtil'

export const SelectFilterBtnStyle = cva({
  base: {
    color: 'lightGray.1',
    fontSize: 18,
    fontWeight: 500,
    border: '1px solid {colors.lightGray.1}',
    px: 2.5,
    py: 1.5,
    rounded: 'full',
    bgColor: 'bg.gray',
    cursor: 'pointer',
    transition: 'background 0.256s, color 0.256s, border 0.256s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    state: {
      active: {
        bgColor: 'bg.red.1',
        color: 'red.1',
        borderColor: 'red.1',
      },
      disabled: { cursor: 'auto' },
      default: {
        _hover: {
          borderColor: 'darkGray.2',
          color: 'darkGray.2',
        },
      },
    },
    isDayBtn: {
      true: {
        width: '57px',
      },
    },
  },
})

interface FilterSelectorProps {
  curFilter: FilterType
  curCategory: number
  handleFilterSelector: (filter: FilterType) => void
}
const FilterSelector = ({ curFilter, curCategory, handleFilterSelector }: FilterSelectorProps) => {
  return (
    <div className={css({ display: 'flex', gap: 3.5, justifyContent: 'center' })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'darkGray.2',
          fontSize: 18,
        })}
      >
        Filtering
      </div>
      <div className={css({ display: 'flex', justifyContent: 'center', gap: 2.5, alignItems: 'center' })}>
        <button
          className={SelectFilterBtnStyle({
            state: curFilter === 'course' ? 'active' : curCategory === 0 ? 'disabled' : 'default',
          })}
          onClick={() => handleFilterSelector('course')}
        >
          {filterTypeMap['course']}
        </button>
        <button
          className={SelectFilterBtnStyle({
            state: curFilter === 'professor' ? 'active' : curCategory === 0 ? 'disabled' : 'default',
          })}
          onClick={() => handleFilterSelector('professor')}
        >
          {filterTypeMap['professor']}
        </button>
        <button
          className={SelectFilterBtnStyle({ state: curFilter === 'code' ? 'active' : 'default' })}
          onClick={() => handleFilterSelector('code')}
        >
          {filterTypeMap['code']}
        </button>
      </div>
    </div>
  )
}

export default FilterSelector
