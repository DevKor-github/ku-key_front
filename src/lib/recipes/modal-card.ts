import { defineRecipe } from '@pandacss/dev'

export const modalCardRecipe = defineRecipe({
  className: 'modalCard',
  description: 'A modal card component',
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    px: 10,
    py: '30px',
    rounded: 20,
    gap: 5,
  },
  variants: {
    variant: {
      default: {
        alignItems: 'flex-start',
        borderColor: 'red.3',
        borderWidth: 1,
        bgColor: 'bg.red',
      },
      alert: {
        bgColor: 'white',
        alignItems: 'center',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
