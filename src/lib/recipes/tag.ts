import { defineRecipe } from '@pandacss/dev'

export const tagRecipe = defineRecipe({
  className: 'boardTag',
  description: 'Tag Component',
  base: {
    display: 'inline-flex',
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
  variants: {
    variant: {
      default: {
        color: 'darkGray.1',
        fontSize: 16,
        fontWeight: 600,
      },
      small: {
        fontSize: 12,
        fontWeight: 700,
      },
      red: {
        bgColor: 'red.1',
        boxShadow: '0px 0px 4px 0px rgba(255, 0, 0, 0.25)',
        color: 'red.1',
        fontSize: 12,
        fontWeight: 700,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
