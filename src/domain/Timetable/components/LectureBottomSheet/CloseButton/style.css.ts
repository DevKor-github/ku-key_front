import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flexCenter,
  {
    width: '1.875rem',
    height: '1.875rem',
    color: vars.color.white,
    backgroundColor: vars.color.red3,
    borderRadius: '100%',
    cursor: 'pointer',
  },
])
