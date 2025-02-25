import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const TitleWrapper = style([f.flex, f.flexColumn, f.alignCenter])

export const Icon = style({ color: vars.color.red3 })

export const CheckDescription = style({
  fontWeight: 700,
  color: vars.color.black,
  fontSize: 24,
})

export const Description = style({
  fontWeight: 500,
  fontSize: 18,
  textAlign: 'center',
  color: vars.color.black,
})

export const ButtonWrapper = style([f.flex, f.gap5])
