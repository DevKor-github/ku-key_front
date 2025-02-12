import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([f.flex, f.directionColumn, f.alignStart, { width: '64.125rem', gap: '1.875rem' }])

export const Box = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '1.5rem' }])

export const ChipWrapper = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

export const ItemWrapper = style([f.flex, f.alignStart, f.wFull, { gap: '2rem' }])

export const ItemBox = style([f.flex, f.directionColumn, f.alignStart, f.cursorPointer, { gap: '0.875rem' }])

export const ItemImage = style([
  {
    width: '11.25rem',
    height: '15rem',
    borderRadius: '11px',
    border: `0.75px solid ${vars.color.lightGray1}`,
  },
])

export const Description = style([f.flex, f.wFull, f.directionColumn, f.alignStart, { maxWidth: '11.25rem' }])

export const LoadWrapper = style([f.flexCenter, f.wFull, { height: '18.75rem' }])
