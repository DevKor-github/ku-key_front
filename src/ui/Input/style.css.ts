import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

const INPUT_BORDER_TRANSITION_S = 0.3

export const Wrapper = style([f.pRelative, f.wFull])

export const Input = style([
  f.wFull,
  {
    borderRadius: 10,
    border: '1px solid',
    padding: '0.5rem 1rem',
    outline: 'none',

    color: vars.color.black,
    backgroundColor: vars.color.white,
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.4,
    height: '3.125rem',

    '::placeholder': {
      color: vars.color.lightGray1,
    },

    transition: `${INPUT_BORDER_TRANSITION_S}s`,
    WebkitTransition: `${INPUT_BORDER_TRANSITION_S}s`,

    borderColor: vars.color.lightGray1,
    ':focus': {
      borderColor: vars.color.black,
    },
  },
  f.smDown({
    fontSize: '0.875rem',
    fontWeight: 400,
    height: '2.5rem',
    backgroundColor: vars.color.bgGray,

    borderColor: vars.color.lightGray2,
    ':focus': {
      borderColor: vars.color.lightGray2,
    },
  }),
])

export const Icon = recipe({
  base: [
    f.pAbsolute,
    f.flex,
    f.flexCenter,
    f.alignCenter,
    f.cursorPointer,
    {
      right: '0.625rem',
      color: vars.color.lightGray1,
      top: '50%',
      transform: 'translate3d(0, -50%, 0)',

      transition: `${INPUT_BORDER_TRANSITION_S}s`,
      WebkitTransition: `${INPUT_BORDER_TRANSITION_S}s`,
    },
    f.smDown({ color: vars.color.lightGray1 }),
  ],
  variants: {
    isFocus: {
      true: [
        {
          color: vars.color.black,
        },
        f.smDown({ color: vars.color.lightGray1 }),
      ],
    },
  },
})
