import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.flexBetween,
  f.wFull,
  {
    padding: '1rem',
    borderRadius: 10,
    backgroundColor: vars.color.red5,
  },
])
