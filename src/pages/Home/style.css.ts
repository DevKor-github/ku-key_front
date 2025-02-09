import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.justifyCenter,
  f.background.white,
  { gap: '7.5rem' },
])

// display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray'
