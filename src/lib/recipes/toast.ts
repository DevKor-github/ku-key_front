import { defineRecipe } from '@pandacss/dev'

export const toastRecipe = defineRecipe({
  className: 'toast',
  description: 'Toast',
  base: {
    display: 'flex',
    flexDir: 'row',
    alignItems: 'center',
    p: { base: 5, smDown: 3 },
    rounded: '0.5rem',
    border: '1px solid white',
    bgColor: '#F0F0F0',
    gap: 2.5,
    w: '23rem',
    maxH: '5.9375rem',
  },
  variants: {
    type: {
      default: {
        bgColor: '#F0F0F0',
        color: '#4F4F4F',
        boxShadow: '0px 0px 10px 0px rgba(128, 128, 128, 0.50)',
      },
      success: {
        bgColor: '#DFF0D8',
        color: '#3C763D',
        boxShadow: '0px 0px 10px 0px rgba(0, 255, 0, 0.50)',
      },
      warning: {
        bgColor: '#FFFAE9',
        color: '#8A6D3B',
        boxShadow: '0px 0px 10px 0px rgba(255, 165, 0, 0.50)',
      },
      error: {
        bgColor: 'red.3',
        color: 'white',
        boxShadow: '0px 0px 10px 0px rgba(255, 0, 0, 0.50)',
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
})
