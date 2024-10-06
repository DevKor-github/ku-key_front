import { defineRecipe } from '@pandacss/dev'

export const postCardRecipe = defineRecipe({
  className: 'postCard',
  description: 'A post card component',
  base: {
    display: 'flex',
    px: 5,
    pt: 5,
    pb: 10,
    flexDir: 'column',
    alignItems: 'flex-start',
    gap: '50px',
    alignSelf: 'stretch',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    rounded: 10,
    maxW: '51rem',
  },
})
