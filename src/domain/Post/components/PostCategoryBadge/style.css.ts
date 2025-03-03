import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.alignCenter,
  f.background.lightGray2,
  f.color.static.darkGray1,
  { padding: '0.25rem 0.625rem', gap: '0.375rem', borderRadius: '6px' },
])
