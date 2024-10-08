import { defineSlotRecipe } from '@pandacss/dev'

export const menubar = defineSlotRecipe({
  className: 'menubar',
  description: 'Styles for the Menubar component',
  slots: ['root', 'trigger', 'content', 'item', 'itemIndicator', 'label'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
    content: {
      zIndex: 50,
      display: 'flex',
      p: 2.5,
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2.5,
      rounded: 10,
      bgColor: 'white',
      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      color: 'lightGray.1',
      _open: { animation: 'animateIn 0.2s ease-in' },
      _close: { animation: 'animateOut 0.2s ease-out' },
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center',
      w: 60,
      h: '49px',
      rounded: 10,
      px: 2.5,
      textStyle: 'heading4_L',
      outline: 'none',
      transition: 'all 0.25s ease',
      _hover: { bgColor: 'lightGray.1', color: 'white' },
      '&[data-disabled]': {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },

    itemIndicator: {
      position: 'absolute',
      left: '2',
      display: 'flex',
      h: '3.5',
      w: '3.5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      px: '2',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
  },
})
