import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Button = style([
  f.flex,
  f.flexRow,
  f.alignCenter,
  {
    width: 'fit-content',
    gap: '0.375rem',
    color: vars.color.darkGray1,
    fontSize: '0.875rem',
    fontWeight: 700,
    padding: '0.375rem 0.75rem',
    borderRadius: '50vh',
    border: '1px solid',
    borderColor: vars.color.lightGray1,
  },
])
