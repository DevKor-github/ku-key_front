import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input component',
  base: {
    display: 'flex',
    rounded: 10,
    border: '1px solid {colors.lightGray.1}',
    bgColor: 'white',
    px: '14px',
    py: '9px',
    textStyle: 'body1_L',
    color: 'black',
    lineHeight: '100%',
    _file: { border: 0, bg: 'transparent', fontSize: 'sm', fontWeight: 'medium' },
    _placeholder: { color: 'lightGray.1' },
    smDown: { fontSize: 12, fontWeight: 600 },
    minH: '39px',
  },
  variants: {
    variant: {
      default: { w: 270 },
      max: { w: 419 },
      middle: { w: 344 },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
