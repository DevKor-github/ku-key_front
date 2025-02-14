import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flexRow,
  f.justifyEnd,
  f.alignCenter,
  {
    alignSelf: 'flex-end',
    gap: '3.12rem',
    padding: '0.5rem 2.625rem 0.75rem 0.625rem',
    borderBottom: '1px solid',
    borderBottomColor: vars.color.lightGray2,
  },
  f.smDown({
    width: '100%',
    gap: '1.25rem',
    padding: '0.625rem 1.25rem 0.625rem 0rem',
    border: 'none',
    backgroundColor: vars.color.lightGray3,
  }),
])

export const Instruction = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.62rem',
    color: vars.color.black,
  },
  vars.typography.desktop.body2R,
  f.smDown({
    gap: '0.25rem',
    ...vars.typography.mobile.miniTag1R,
  }),
])

export const Icon = style([
  {
    width: '1.25rem',
    height: '1.25rem',
    color: vars.color.darkGray2,
  },
  f.smDown({
    width: '0.75rem',
    height: '0.75rem',
  }),
])
