import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  { height: '35.9375rem', padding: '0.625rem 0rem' },
])

export const InnerWrapper = style([
  f.flex,
  f.alignCenter,
  f.wFull,
  {
    height: '34.0625rem',
    padding: '1rem 0rem 4.375rem 0rem',
    gap: '1.25rem',
    flexShrink: 0,
    borderTop: '2px solid rgba(209, 211, 218, 0.50)',
    borderBottom: '2px solid rgba(209, 211, 218, 0.50)',
  },
])

export const ScrollWrapper = style([f.flex, f.wFull, f.directionColumn, f.hFull, { overflowY: 'auto' }])
