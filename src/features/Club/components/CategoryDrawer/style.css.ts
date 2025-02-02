import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.pRelative,
  {
    padding: '0 20px',
    paddingTop: 15,
    height: 390,
  },
])

export const Instruction = style({
  fontWeight: 600,
  fontSize: 16,
  marginBottom: 14,
})

export const CategoryWrapper = style([
  f.flex,
  f.wrap,
  {
    rowGap: 8,
    columnGap: 4,
  },
])

export const BottomSection = style([
  f.pAbsolute,
  f.flex,
  f.alignCenter,
  f.justifyBetween,
  {
    top: 280,
    left: 0,
    right: 0,
    borderTop: '0.5px solid',
    borderColor: vars.color.lightGray2,
    padding: '0 20px',
    paddingTop: 10,
  },
])

export const ResetButton = style([
  f.flex,
  f.alignCenter,
  {
    fontSize: 14,
    fontWeight: 500,
    color: vars.color.darkGray1,
    gap: 5,
  },
])

export const CloseButton = style([
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  {
    width: 180,
    padding: 10,
    flexShrink: 0,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.2,
    color: vars.color.white,
    backgroundColor: vars.color.black,
    borderRadius: '50vh',
  },
])
export const CloseText = style({
  fontWeight: 700,
})
