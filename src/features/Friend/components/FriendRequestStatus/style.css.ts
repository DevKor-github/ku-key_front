import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.flexBetween,
  f.wFull,
  {
    padding: '1rem',
    borderRadius: 10,
    backgroundColor: vars.color.red5,
  },
])

export const Request = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.75rem',
  },
])

export const Description = style([f.flexColumn, { gap: '0.25rem' }])

export const ImagePreview = style([
  f.pRelative,
  {
    width: '2.875rem',
    height: '2.875rem',
  },
])

export const Image = style([
  f.pAbsolute,
  {
    borderRadius: 10,
    width: '2.5rem',
    height: '2.5rem',
    border: '1px solid',
    borderColor: vars.color.lightGray1,
  },
])

export const Chip = recipe({
  base: [
    f.flex,
    f.justifyCenter,
    f.alignCenter,
    {
      width: '2.43rem',
      height: '1.375rem',
      borderRadius: '50vh',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 'normal',
      color: vars.color.white,
      background: vars.color.darkGray1,
      gap: '0.25rem',
    },
  ],
  variants: {
    unread: {
      true: {
        background: vars.gradient.red2,
      },
    },
  },
})

export const UsersIcon = style({
  width: '0.625rem',
  height: '0.625rem',
})
