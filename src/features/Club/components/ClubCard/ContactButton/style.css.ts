import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Button = style([
  f.flex,
  f.flexRow,
  f.alignCenter,
  f.justifyCenter,
  {
    width: '3.75rem',
    height: '3.75rem',
    backgroundColor: vars.color.red5,
    color: vars.color.darkGray1,
    borderRadius: 11,
    padding: '0.8rem',
  },
  f.smDown({
    width: '2.875rem',
    height: '2.875rem',
    borderRadius: 10,
    padding: '0.65rem',
  }),
])
