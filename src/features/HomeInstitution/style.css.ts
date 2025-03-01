import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  { width: '64.125rem', gap: '1.875rem' },
  f.smDown({ padding: '0 1.25rem', width: '100%', gap: '1rem' }),
])

export const Box = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '1.5rem' }])

export const ChipWrapper = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

export const ItemWrapper = style([
  f.flex,
  f.alignStart,
  f.wFull,
  { gap: '1rem' },
  f.smDown({ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }),
])

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
  f.smDown({ width: '1.25rem', height: '1.25rem', borderRadius: '4px', filter: 'none' }),
])

export const MobileItemBox = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  f.background.lightGray3,
  { padding: '0.5rem 0.625rem 0.5rem 0.5rem', width: 'calc((100vw - 3.125rem)/2)', borderRadius: '10px' },
])

export const MobileItemImage = style([f.flex, f.alignCenter, { gap: '0.25rem' }])
