import { defineRecipe } from '@pandacss/dev'

export const tagRecipe = defineRecipe({
  className: 'tag',
  description: 'Tag Component',
  base: {
    display: 'flex',
    px: 2.5,
    py: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1.5,
    alignSelf: 'stretch',
    rounded: 'full',
    bgCololr: 'white',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'darkGray.2',
  },
})
