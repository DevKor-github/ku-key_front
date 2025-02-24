import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  { width: '64.125rem', gap: '1.25rem' },
  f.smDown({ padding: '0 1.25rem', width: '100%', gap: '1rem' }),
])

export const ContentBox = style([
  f.flex,
  f.alignStart,
  f.wFull,
  f.smDown({ flexDirection: 'column', gap: '3.75rem' }),
  { gap: '1.25rem' },
])

export const Title = style([f.flex, f.alignEnd, { gap: '0.5rem', alignItems: 'baseline' }])

export const TitleText = style([f.smDown({ ...vars.typography.mobile.miniTag1M })])
