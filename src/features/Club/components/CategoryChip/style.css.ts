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
      gap: 2,
      borderRadius: '50vh',
      width: 'fit-content',
      flexShrink: 0,
      transition: 'all 0.2s ease-in-out',

      color: vars.color.darkGray2,
      backgroundColor: vars.color.lightGray3,
      padding: '4px 0',
      paddingLeft: 6,
      paddingRight: 10,
    },
    f.smDown({
      border: '0.5px solid',
      color: vars.color.darkGray1,
      borderColor: vars.color.lightGray1,
      padding: '2px 0',
      paddingLeft: 6,
      paddingRight: 10,
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
    width: 30,
    height: 30,
  },
  f.smDown({
    width: 24,
    height: 24,
  }),
])

export const Text = style({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.2,
})
