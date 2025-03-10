import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  f.background.lightGray2,
  { width: '44.5625rem', padding: '0.625rem', borderRadius: '6px' },
  f.smDown({
    width: '100%',
    overflowX: 'auto',
    gap: '0.875rem',
    borderRadius: '0px',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  }),
])
