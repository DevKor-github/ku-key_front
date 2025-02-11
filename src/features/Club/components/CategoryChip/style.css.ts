import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = recipe({
  base: [
    f.flex,
    f.alignCenter,
    f.background.white,
    f.cursorPointer,
    {
      gap: '0.125rem',
      borderRadius: '50vh',
      width: 'fit-content',
      flexShrink: 0,
      transition: 'all 0.2s ease-in-out',

      color: vars.color.darkGray2,
      backgroundColor: vars.color.lightGray3,
      padding: '0.25rem 0.62rem',
    },
    f.smDown({
      border: '0.5px solid',
      color: vars.color.darkGray1,
      borderColor: vars.color.lightGray1,
    }),
  ],
  variants: {
    selected: {
      true: [
        { background: vars.gradient.red2, color: vars.color.white },
        f.smDown({ backgroundColor: vars.color.red2, color: vars.color.white }),
      ],
    },
  },
})

export const IconWrapper = style([
  {
    width: '1.875rem',
    height: '1.875rem',
  },
  f.smDown({
    width: '1.5rem',
    height: '1.5rem',
  }),
])

export const Text = style(vars.typography.mobile.bodyR)
