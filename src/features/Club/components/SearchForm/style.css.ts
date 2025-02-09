import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const FormWrapper = style([
  f.wFull,
  f.flex,
  f.alignCenter,
  {
    gap: 30,
  },
  f.smDown({
    gap: 10,
  }),
])

export const FilterWrapper = style([
  f.flex,
  f.alignCenter,
  {
    gap: 10,
    padding: 10,
    flexShrink: 0,
  },
])

export const FilterText = style([
  {
    color: vars.color.darkGray1,
    fontSize: '1.25rem',
    fontWeight: 700,
  },
])
