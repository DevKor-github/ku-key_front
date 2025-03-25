import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.wFull,
  f.hFull,
  f.flexColumn,
  f.alignCenter,
  {
    gap: '1.375rem',
  },
])

export const ErrorFallback = style([f.flexCenter, f.wFull, f.hFull])
