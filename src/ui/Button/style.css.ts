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
    height: '2.875rem',
    padding: '0rem 1.875rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
  },
])

export const Button = styleVariants({
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
  mainPin: [
    f.cursorPointer,
    f.flexRow,
    f.alignCenter,
    {
      backgroundColor: vars.color.bgGray,
      borderRadius: '30px',
      border: `solid 1px ${vars.color.lightGray1}`,
      color: vars.color.lightGray1,
      transition: 'all 0.2s ease-in-out',
      height: '2.25rem',
      padding: '0.5rem 0.625rem',
      gap: '0.25rem',
      ':hover': { borderColor: vars.color.darkGray2, color: vars.color.darkGray2 },
      '&[data-active="true"]': {
        color: vars.color.red1,
        borderColor: vars.color.red1,
        backgroundColor: vars.color.bgRed1,
      },
      ':disabled': { cursor: 'default' },
    },
  ],
})

export type ButtonVariants = keyof typeof Button
