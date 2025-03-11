import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Trigger = style([f.wFull, { height: '0.0625rem' }])

export const LoadingWrapper = style([
  f.wFull,
  f.flexCenter,
  {
    padding: '0.625rem',
  },
])
