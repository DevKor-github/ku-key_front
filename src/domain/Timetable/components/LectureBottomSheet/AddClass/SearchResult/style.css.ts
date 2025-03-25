import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flexColumn,
  f.wFull,
  {
    overflowY: 'auto',
    overscrollBehavior: 'contain',
    paddingTop: '0.625rem',
  },
])
