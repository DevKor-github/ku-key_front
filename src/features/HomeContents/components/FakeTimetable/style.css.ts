import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.alignEnd,
  f.wFull,
  f.justifyCenter,
  { paddingBottom: '3.94rem', maxWidth: '44.5rem', height: '37.3125rem' },
])

export const Button = style([
  f.flex,
  f.alignStart,
  f.background.white,
  f.cursorPointer,
  { padding: '0.75rem 1rem', gap: '0.625rem', borderRadius: '30px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' },
])
