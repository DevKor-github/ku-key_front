import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.pRelative,
  {
    padding: '0 1.25rem',
    paddingTop: '1rem',
    height: '24.375rem',
  },
])

export const Instruction = style([
  vars.typography.mobile.headingSB,
  {
    marginBottom: '0.875rem',
  },
])

export const CategoryWrapper = style([
  f.flex,
  f.wrap,
  {
    rowGap: '0.5rem',
    columnGap: '0.25rem',
  },
])

export const BottomSection = style([
  f.pAbsolute,
  f.flex,
  f.alignCenter,
  f.justifyBetween,
  {
    top: '17.5rem',
    left: 0,
    right: 0,
    borderTop: '0.5px solid',
    borderColor: vars.color.lightGray2,
    padding: '0 1.25rem',
    paddingTop: '0.625rem',
  },
])

export const ResetButton = style([
  f.flex,
  f.alignCenter,
  vars.typography.mobile.bodyM,
  {
    color: vars.color.darkGray1,
    gap: '0.3125rem',
  },
])

export const CloseButton = style([
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  vars.typography.mobile.headingR,
  {
    width: '11.25rem',
    padding: '0.625rem',
    flexShrink: 0,
    color: vars.color.white,
    backgroundColor: vars.color.black,
    borderRadius: '50vh',
  },
])
export const CloseText = style({
  fontWeight: 700,
})
