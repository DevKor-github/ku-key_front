import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const OptionButton = recipe({
  base: [
    f.flex,
    f.justifyCenter,
    f.alignCenter,
    {
      borderRadius: '50vh',
      backgroundColor: vars.color.lightGray3,
      width: '2.5rem',
      height: '2.5rem',
      flexShrink: 0,
      border: '1px solid',
      borderColor: vars.color.lightGray3,
      color: '#BDBDBD',
    },
  ],
  variants: {
    selected: {
      true: {
        borderColor: 'rgba(255, 88, 88, 0.5)',
        backgroundColor: vars.color.red4,
        padding: '0.3125rem',
        color: vars.color.red3,
      },
    },
  },
})
