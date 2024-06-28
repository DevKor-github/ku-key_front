import { defineRecipe } from '@pandacss/dev'

export const shadowRecipe = defineRecipe({
  className: 'div',
  description: 'Shadow Style for Divbox',
  base: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
})
