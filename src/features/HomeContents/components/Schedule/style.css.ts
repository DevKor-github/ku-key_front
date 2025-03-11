import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  f.smDown({ padding: '0' }),
  { padding: '0.625rem 0rem' },
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
  f.smDown({ padding: '0.75rem 0rem 1.125rem 0rem', height: '16.5rem' }),
])

export const ScrollWrapper = style([f.flex, f.wFull, f.directionColumn, f.hFull, { overflowY: 'auto' }])
