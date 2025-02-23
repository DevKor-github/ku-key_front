import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const ItemWrapper = style([f.flex, f.alignStart, f.wFull, { gap: '1.25rem' }])

export const CheckWrapper = style([f.flex, f.alignCenter, f.directionColumn, f.hFull])

export const Wrapper = style([f.flex, f.alignStart, f.wFull, f.directionColumn, { gap: '1.5rem', height: '7.875rem' }])

export const Header = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.25rem' }])

export const Professor = style([f.flex, f.alignCenter, { gap: '0.5rem' }])

export const Description = style([f.flex, f.alignCenter, { gap: '2rem' }])

export const Location = style([f.flex, f.directionRow, f.alignCenter, { gap: '0.25rem' }])

export const Line = style([
  f.flex,
  f.hFull,
  f.directionColumn,
  f.background.lightGray1,
  { width: '0.25rem', height: '7.5rem', borderRadius: '4px' },
])

export const LineInner = style([f.flex, f.wFull, f.hFull, f.background.red2, { borderRadius: '4px' }])

export const LineInnerGradient = style([
  f.flex,
  f.wFull,
  {
    height: '5px',
    background: `linear-gradient(to bottom, ${vars.color.red2}, #D9D9D9)`,
    borderRadius: '0px 0px 4px 4px',
  },
])
