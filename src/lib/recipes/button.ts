import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'Button component',
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2.5,
    cursor: 'pointer',
    rounded: 'md',
    fontSize: 'sm',
    fontWeight: 500,
  },
  variants: {
    variant: {
      default: {
        bg: '#09090b',
        color: 'gray.50',
        _hover: { transition: 'background 0.25s', bg: '#09090b/90' },
      },
      // outline: {
      //   bg: 'background',
      //   border: 'input',
      //   color: 'primary',
      //   _hover: { transition: 'background 0.25s', bg: 'accent', color: 'accent.foreground' },
      // },
      // ghost: {
      //   color: 'primary',
      //   _hover: { bg: 'accent', color: 'accent.foreground' },
      // },
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
    size: 'default',
  },
})
