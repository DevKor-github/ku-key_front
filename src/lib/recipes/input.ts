import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input component',
  base: {
    display: 'flex',
    w: 270,
    rounded: 10,
    border: '1px solid {colors.lightGray.1}',
    bgColor: 'white',
    px: '14px',
    py: 2.5,
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
    _file: { border: 0, bg: 'transparent', fontSize: 'sm', fontWeight: 'medium' },
    _placeholder: { color: 'lightGray.1' },
  },
})
