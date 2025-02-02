import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = recipe({
  base: [
    f.flex,
    f.alignCenter,
    f.background.white,
    {
      gap: 2,
      borderRadius: '50vh',
      border: '0.5px solid',
      borderColor: vars.color.lightGray1,
      padding: '2px 0',
      paddingLeft: 6,
      paddingRight: 10,
      width: 'fit-content',
      flexShrink: 0,
      color: vars.color.darkGray1,
      transition: 'all 0.2s ease-in-out',
    },
  ],
  variants: {
    selected: {
      true: { backgroundColor: vars.color.red2, color: vars.color.white },
    },
  },
})

export const IconWrapper = style({
  width: 24,
  height: 24,
})

export const Text = style({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.2,
})
