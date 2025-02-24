import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  f.background.white,
  { gap: '7.5rem' },
  f.smDown({ gap: '3.75rem' }),
])

export const Section = style([f.smDown({ width: '100%' })])
