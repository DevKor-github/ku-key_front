import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  f.background.lightGray2,
  { width: '44.5625rem', padding: '0.625rem', borderRadius: '6px' },
])
