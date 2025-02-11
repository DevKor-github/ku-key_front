import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  {
    flexWrap: 'wrap',
    gap: '0.875rem',
  },
])
