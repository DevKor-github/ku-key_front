import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.alignCenter,
  f.wFull,
  f.background.white,
  {
    padding: '0.375rem 1.25rem 0.375rem 0.625rem',
    gap: '0.625rem',
    borderRadius: '10px',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
])

export const Body = style([f.flex, f.directionColumn, f.alignStart, { gap: '0.25rem', flex: '1 0 0' }])

export const Header = style([f.flex, f.alignCenter, f.justifyBetween, f.wFull])
