import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'Button component',
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2.5,
    h: '54px',
    cursor: 'pointer',
    rounded: '66px',
    fontSize: 18,
    fontWeight: 500,
    px: '30px',
  },
  variants: {
    variant: {
      default: {
        bgColor: 'lightGray.2',
        color: 'black.2',
        borderWidth: 1,
        borderColor: 'lightGray.2',
        _hover: { transition: 'border-color 0.25s ease-in-out', borderColor: 'black.2' },
      },
      red_1: {
        color: 'red.1',
        borderWidth: 1,
        borderColor: 'transparent',
        _hover: { transition: 'border-color 0.25s ease-in-out', borderColor: 'red.1' },
        _selected: { bgColor: 'red.1', transition: 'background-color 0.25s ease-in-out', color: 'white' },
      },
      red_3: {
        bgColor: 'red.3',
        color: 'white',
        borderWidth: 1,
        borderColor: 'red.3',
        _hover: { transition: 'background-color 0.25s ease-in-out', bgColor: 'transparent', color: 'red.3' },
      },
    },
    size: {
      default: { h: 10, px: 4, py: 2 },
      sm: { h: 9, px: 3 },
      lg: { h: 11, px: 8 },
      icon: { h: 10, w: 10 },
    },
  },
  defaultVariants: {
    variant: 'default',
    // size: 'default',
  },
})
