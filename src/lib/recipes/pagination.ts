import { defineRecipe } from '@pandacss/dev'

const paginationRecipe = defineRecipe({
  className: 'pagination',
  description: 'Pagination component',
  base: {
    display: 'flex',
    w: 'full',
    justifyContent: 'center',
  },
})

const paginationContentRecipe = defineRecipe({
  className: 'pagination-content',
  description: 'Pagination content component',
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
})

const paginationEllipsisRecipe = defineRecipe({
  className: 'pagination-ellipsis',
  description: 'Pagination ellipsis component',
  base: {
    display: 'flex',
    color: 'primary',
    alignItems: 'center',
    h: 9,
    w: 9,
    justifyContent: 'center',
  },
})

export { paginationRecipe, paginationContentRecipe, paginationEllipsisRecipe }
