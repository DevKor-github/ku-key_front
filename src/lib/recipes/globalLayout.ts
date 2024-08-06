import { defineRecipe } from '@pandacss/dev'

export const globalLayoutRecipe = defineRecipe({
  className: 'globalLayout',
  description: 'layout for global',
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '100vw',
    pl: `calc((100vw / 14) * 2.5)`,
    pr: `calc((100vw / 14) * 1.7)`,
  },
})
