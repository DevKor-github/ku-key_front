import { style } from '@vanilla-extract/css'

import { f } from '@/style'
export const Wrapper = style([
  f.pAbsolute,
  f.flex,
  f.wScreen,
  f.alignCenter,
  {
    height: 96,
    background: 'linear-gradient(180deg, rgba(33, 33, 36, 0.30) 50%, rgba(33, 33, 36, 0.00) 100%)',
    padding: '0 26px',
  },
])
