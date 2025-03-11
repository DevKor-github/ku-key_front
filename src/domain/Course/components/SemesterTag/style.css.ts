import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flexCenter,
  {
    padding: '0.1875rem 0.375rem',
    gap: '0.625rem',
    borderRadius: '4px',
    backgroundColor: `rgba(209, 211, 218, 0.50)`,
  },
])
