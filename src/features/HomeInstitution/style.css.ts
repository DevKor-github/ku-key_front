import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, f.alignStart, { width: '64.125rem', gap: '1.875rem' }])

export const Box = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '1.5rem' }])

export const ChipWrapper = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

export const ItemWrapper = style([f.flex, f.alignStart, f.wFull, { gap: '1rem' }])

export const ItemBox = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  f.cursorPointer,
  { gap: '1rem', width: '8.75rem' },
])

export const ItemImage = style([
  {
    width: '6.25rem',
    aspectRatio: '1/1',
    borderRadius: '20px',
    filter: 'drop-shadow(0px 0px 5.3px rgba(0, 0, 0, 0.25))',
  },
])
