import { defineRecipe } from '@pandacss/dev'

export const postTextPreviewRecipe = defineRecipe({
  className: 'postPreview',
  description: 'Post preview wrapper',
  base: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    rounded: 80,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    bgColor: 'white',
    pr: 10,
    cursor: 'pointer',
  },
  variants: {
    variant: {
      default: {
        gap: 5,
        py: 2.5,
        pl: '11px',
      },
      onlyTitle: {
        gap: 2.5,
        py: 1.5,
        pl: 2,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
