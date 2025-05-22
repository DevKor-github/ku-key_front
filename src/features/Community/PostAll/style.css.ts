import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  { gap: '3.75rem' },
  f.smDown({ gap: '1rem', padding: '0 1rem 7.5rem 1rem', width: '100%', overflowX: 'hidden' }),
])
