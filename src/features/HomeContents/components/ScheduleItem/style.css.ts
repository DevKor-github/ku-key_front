import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const ItemWrapper = style([f.flex, f.alignStart, f.wFull, { gap: '1.25rem' }, f.smDown({ gap: '0.625rem' })])

export const CheckWrapper = style([f.flex, f.alignCenter, f.justifyStart, f.directionColumn, f.hFull])

export const Wrapper = style([
  f.flex,
  f.alignStart,
  f.wFull,
  f.directionColumn,
  { gap: '1.5rem', height: '7.875rem' },
  f.smDown({ gap: '0.75rem', height: 'auto' }),
])

export const Header = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.25rem' }])

export const Professor = style([f.flex, f.alignCenter, { gap: '0.5rem' }])

export const Description = style([f.flex, f.alignCenter, { gap: '2rem' }, f.smDown({ gap: '1rem' })])

export const Location = style([f.flex, f.directionRow, f.alignCenter, { gap: '0.25rem' }])

export const IndicatorIcon = style([
  f.smDown({ width: '1.125rem', height: '1.125rem' }),
  { width: '2.25rem', height: '2.25rem' },
])

export const Icon = style([
  f.smDown({ width: '0.75rem', height: '0.75rem' }),
  { width: '1.5rem', height: '1.5rem', flex: 1 },
])

export const Line = style([
  f.flex,
  f.hFull,
  f.directionColumn,
  f.background.lightGray1,
  { width: '0.25rem', height: '7.5rem', borderRadius: '4px' },
  f.smDown({ height: '3.75rem', width: '0.125rem' }),
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
