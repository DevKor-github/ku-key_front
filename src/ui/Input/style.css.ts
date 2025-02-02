import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

const INPUT_BORDER_TRANSITION_S = 0.3

export const Wrapper = style([f.pRelative, f.wFull])

export const Input = recipe({
  base: {
    width: '100%',
    borderRadius: 10,
    border: '1px solid',
    borderColor: vars.color.lightGray1,
    backgroundColor: vars.color.white,
    padding: '8px 10px',
    outline: 'none',

    color: vars.color.black,
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.4,

    '::placeholder': {
      color: vars.color.lightGray1,
    },

    transition: `${INPUT_BORDER_TRANSITION_S}s`,
    WebkitTransition: `${INPUT_BORDER_TRANSITION_S}s`,
  },
  variants: {
    color: {
      lightGray: [
        {
          borderColor: vars.color.lightGray1,
          backgroundColor: vars.color.white,
          ':focus': {
            borderColor: vars.color.black,
          },
        },
        f.smDown({
          borderColor: vars.color.lightGray2,
          backgroundColor: vars.color.bgGray,
          ':focus': {
            borderColor: vars.color.lightGray2,
          },
        }),
      ],
    },
  },
})

export type InputVariants = RecipeVariants<typeof Input>

export const SearchIcon = style([
  f.pAbsolute,
  f.flex,
  f.flexCenter,
  f.alignCenter,
  {
    right: 10,
    color: vars.color.lightGray1,
    top: '50%',
    transform: 'translate3d(0, -50%, 0)',
  },
])
