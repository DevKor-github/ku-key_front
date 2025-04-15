import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  {
    gap: '1.25rem',
  },
])
