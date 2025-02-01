import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const FormWrapper = style([
  f.wFull,
  f.flex,
  {
    gap: 10,
  },
])

export const OptionButton = recipe({
  base: [
    f.flex,
    f.justifyCenter,
    f.alignCenter,
    {
      borderRadius: '100%',
      backgroundColor: vars.color.lightGray3,
      width: 40,
      height: 40,
      flexShrink: 0,
      border: '1px solid',
      borderColor: vars.color.lightGray3,
    },
  ],
  variants: {
    selected: {
      true: {
        borderColor: vars.color.red3,
        backgroundColor: vars.color.red4,
      },
    },
  },
})
