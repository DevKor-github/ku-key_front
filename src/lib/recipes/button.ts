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
      outline: {
        bgColor: 'gray.50',
        borderWidth: '1px',
        borderColor: 'gray.200',
        color: '#09090b',
        _hover: { transition: 'background 0.25s', bg: 'gray.100', color: 'gray.900' },
      },
      ghost: {
        color: '#09090b',
        _hover: { bg: 'gray.100', color: 'gray.900' },
      },
      loginColored: {
        w: '209px',
        px: 7,
        py: 3,
        rounded: 30,
        bgColor: 'red.2',
        color: 'white',
      },
      loginOutline: {
        w: '209px',
        px: 7,
        py: 3,
        rounded: 30,
        border: '1px solid {colors.red.2}',
        color: 'red.2',
        gap: 2.5,
      },
      input: {
        px: 4,
        py: 2.5,
        rounded: 10,
        border: '1px solid {colors.lightGray.1}',
        bgColor: 'white',
        color: 'lightGray.1',
        _checked: { bgColor: 'red.2', color: 'white', borderColor: 'red.2' },
        transition: 'all 0.25s',
      },
    },
    size: {
      default: { h: 10, px: 4, py: 2 },
      sm: { h: 9, px: 3 },
      lg: { h: 11, px: 8 },
      icon: { h: 10, w: 10 },
    },
    // size: {
    //   default: { h: 10, px: 4, py: 2 },
    //   sm: { h: 9, px: 3 },
    //   lg: { h: 11, px: 8 },
    //   icon: { h: 10, w: 10 },
    // },
  },
  defaultVariants: {
    variant: 'default',
    // size: 'default',
  },
})
