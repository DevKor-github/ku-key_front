import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.flexColumn,
  {
    padding: '1.31rem 1.25rem',
    gap: '1.56rem',
  },
])

export const Header = style([
  f.flex,
  f.flexColumn,
  {
    gap: '0.75rem',
  },
])
