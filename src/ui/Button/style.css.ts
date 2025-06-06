import { style, styleVariants } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Base = style([
  f.flexCenter,
  f.cursorPointer,
  f.typography.desktop.body1M,
  f.color.static.darkGray2,
  f.background.lightGray2,
  {
    borderRadius: '6px',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
  },
])

export const ButtonStyle = styleVariants({
  default: [
    Base,
    {
      '&:not([data-active="true"]):hover': {
        background: vars.color.lightGray1,
        color: vars.color.white,
      },
      ':active': {
        background: vars.color.red2,
        color: vars.color.white,
      },
      ':focus': {
        boxShadow: vars.shadow.p25,
      },
      '&[data-active="true"]': {
        background: vars.color.red2,
        color: vars.color.white,
      },
    },
  ],
  red: [
    Base,
    f.background.red2,
    f.color.static.white,
    {
      ':hover': {
        boxShadow: vars.shadow.p50Red,
      },
      ':focus': {
        boxShadow: vars.shadow.p50Red,
      },
    },
  ],
  darkRed: [
    Base,
    {
      background: 'none',
      color: vars.color.red1,
      border: `1px solid transparent`,
      ':hover': { border: `1px solid ${vars.color.red1}` },
      ':active': { background: vars.color.red1, color: vars.color.white },
      ':focus': { boxShadow: vars.shadow.p3 },
    },
  ],
  gray: [Base, { ':hover': { boxShadow: vars.shadow.p25 }, ':focus': { boxShadow: vars.shadow.p25 } }],
})

export const ButtonSize = styleVariants({
  default: [{ height: '2.875rem', padding: '0rem 1.875rem', ...vars.typography.desktop.body1M }],
  sm: [{ height: '1.75rem', padding: '0.5rem 0.625rem', ...vars.typography.mobile.bodyM, flex: '1 0 0' }],
})

export type ButtonStyleVariants = keyof typeof ButtonStyle
export type ButtonSizeVariants = keyof typeof ButtonSize
