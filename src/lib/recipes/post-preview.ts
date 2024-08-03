import { defineRecipe } from '@pandacss/dev'

export const postPreviewRecipe = defineRecipe({
  className: 'postPreview',
  description: 'Post preview wrapper',
  base: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    rounded: 80,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    bgColor: 'white',
    pl: 2.5,
    pr: 10,
  },
  variants: {
    variant: {
      default: {
        gap: 5,
        py: 2.5,
      },
      onlyTitle: {
        gap: 2.5,
        py: 1.5,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
