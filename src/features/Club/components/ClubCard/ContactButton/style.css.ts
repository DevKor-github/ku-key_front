import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Button = style([
  f.flex,
  f.flexRow,
  f.alignCenter,
  f.justifyCenter,
  {
    width: 'fit-content',
    gap: 6,
    color: vars.color.darkGray1,
    fontSize: 14,
    fontWeight: 700,
    padding: '6px 12px',
    borderRadius: '50vh',
    border: '1px solid',
    borderColor: vars.color.lightGray1,
  },
  f.smDown({
    width: 46,
    height: 46,
    backgroundColor: vars.color.red5,
    padding: 0,
    borderRadius: 10,
    border: 'none',
  }),
])
