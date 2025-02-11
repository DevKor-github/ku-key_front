import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Chip = style([
  f.flexCenter,
  f.cursorPointer,
  f.typography.desktop.heading2SB,
  f.color.static.darkGray2,
  f.background.lightGray2,
  {
    height: '2.125rem',
    padding: '0.625rem 1.25rem',
    borderRadius: '23px',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    gap: '0.625rem',
    flexShrink: 0,
    ':hover': {
      background: vars.color.lightGray1,
      color: vars.color.white,
    },
    ':active': {
      background: vars.gradient.red2,
      color: vars.color.white,
    },
    ':focus': {
      boxShadow: vars.shadow.p25,
    },
    selectors: {
      '&[aria-selected="true"]': {
        background: vars.gradient.red2,
        color: vars.color.white,
      },
    },
  },
])
