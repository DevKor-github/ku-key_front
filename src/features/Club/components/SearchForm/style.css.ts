import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const FormWrapper = style([
  f.wFull,
  f.flex,
  f.alignCenter,
  {
    gap: '1.875rem',
  },
  f.smDown({
    gap: '0.625rem',
    padding: '0 1.25rem',
  }),
])

export const FilterWrapper = style([
  f.flex,
  f.alignCenter,
  {
    gap: '0.625rem',
    padding: '0.625rem',
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
