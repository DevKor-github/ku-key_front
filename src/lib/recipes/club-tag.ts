import { defineRecipe } from '@pandacss/dev'

export const clubTagRecipe = defineRecipe({
  className: 'clubTag',
  description: 'A club tag component',
  base: {
    display: 'flex',
    h: '31px',
    py: 1.5,
    px: 2.5,
    rounded: 91,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'darkGray.1',
  },
  variants: {
    variant: {
      club: { w: 'auto' },
      rank: { w: 13, gap: '5px' },
    },
  },
  defaultVariants: {
    variant: 'club',
  },
})
