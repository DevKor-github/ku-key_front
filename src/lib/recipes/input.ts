import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input component',
  base: {
    display: 'flex',
    h: 10,
    w: 'full',
    rounded: 'md',
    border: '1px solid gray.200',
    bg: 'gray.50',
    px: 3,
    py: 2,
    fontSize: 'sm',
    color: 'black.1',
    ringOffset: 0.5,
    ringColor: 'ring',
    _file: { border: 0, bg: 'transparent', fontSize: 'sm', font: 'medium' },
    _placeholder: { color: 'gray.500' },
  },
})
