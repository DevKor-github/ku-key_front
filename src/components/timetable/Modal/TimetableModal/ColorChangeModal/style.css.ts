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

export const Contents = style([
  f.flex,
  {
    gap: 10,
  },
])
