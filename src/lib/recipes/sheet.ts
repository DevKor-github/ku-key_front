import { defineRecipe } from '@pandacss/dev'

export const sheetRecipe = defineRecipe({
  className: 'sheet',
  description: 'Sheet component',
  base: {
    pos: 'fixed',
    zIndex: 50,
    gap: 4,
    p: '30px',
    transition: 'all ease-in-out',
    _open: { animation: 'animateIn 0.2s ease-in' },
    _closed: { animation: 'animateOut 0.2s ease-out' },
    bg: 'white',
  },

  variants: {
    side: {
      top: {
        insetX: 0,
        top: 0,
        _open: { animation: 'slideInFromTop 0.2s ease-out' },
        _closed: { animation: 'slideOutToTop 0.2s ease-out' },
      },
      bottom: {
        insetX: 0,
        bottom: 0,
        _open: { animation: 'slideInFromBottom 0.2s ease-out' },
        _closed: { animation: 'slideOutToBottom 0.2s ease-out' },
      },
      left: {
        insetY: 0,
        left: 0,
        h: 'full',
        w: '3/4',
        _open: { animation: 'slideInFromLeft 0.2s ease-out' },
        _closed: { animation: 'slideOutToLeft 0.2s ease-out' },
      },
      right: {
        insetY: 0,
        right: 0,
        h: 'full',
        w: '85%',
        _open: { animation: 'slideInFromRight 0.2s ease-out' },
        _closed: { animation: 'slideOutToRight 0.2s ease-out' },
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
})
