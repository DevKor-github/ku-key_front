import { defineRecipe } from '@pandacss/dev'

export const carouselButtonRecipe = defineRecipe({
  className: 'carousel-button',
  base: {
    display: 'flex',
    rounded: 'full',
    w: 10,
    h: 10,
    bgColor: 'black/50',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: 0.7,
    _hover: { bgColor: 'black/80' },
    _disabled: { bgColor: 'black/40', opacity: 0.2, _hover: { bgColor: 'black/40', opacity: 0.2 } },
    transition: 'all 0.25s ease-in-out',
  },
})
