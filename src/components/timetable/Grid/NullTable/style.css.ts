import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.wFull,
  f.hFull,
  f.flexCenter,
  f.flexColumn,
  {
    height: '30rem',
    backgroundColor: vars.color.bgGray,
    borderRadius: '10px',
    border: '1px solid',
    borderColor: vars.color.lightGray1,
    gap: '1rem',
  },
])

export const Image = style({
  width: '7rem',
  opacity: 0.7,
})
