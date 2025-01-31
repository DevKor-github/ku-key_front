import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const TitleWrapper = style([
  f.flex,
  f.flexColumn,
  f.alignCenter,
  {
    gap: 10,
  },
])

export const Icon = style({
  color: vars.color.lightGray1,
})

export const Title = style({
  fontWeight: 700,
  fontSize: 24,
  color: vars.color.black,
})

export const Input = style({
  width: 284,
  height: 52,
  borderColor: vars.color.lightGray1,
  outline: 'none',
  backgroundColor: vars.color.bgGray,
  fontSize: 18,
  '::placeholder': {
    color: vars.color.lightGray1,
  },
})
