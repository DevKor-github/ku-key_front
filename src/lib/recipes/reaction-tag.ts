import { defineRecipe } from '@pandacss/dev'

export const reactionTagRecipe = defineRecipe({
  className: 'reviewTag',
  description: 'Review tag',
  base: {
    display: 'inline-flex',
    px: 2.5,
    py: 2,
    maxH: '37px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
    flexShrink: 0,
    fontSize: 18,
    fontWeight: 500,
    rounded: 30,
    border: '1px solid {colors.lightGray.1}',
    bgColor: 'bg.gray',
    color: 'lightGray.1',
    _hover: { border: '1px solid {colors.darkGray.1}', color: 'darkGray.1' },
    _pressed: {
      border: '1px solid {colors.red.1}',
      color: 'red.1',
      bgColor: 'bg.red.1',
      _hover: { border: '1px solid {colors.red.1}', color: 'red.1' },
    },
    transition: 'all 0.25s ease',
    cursor: 'pointer',
  },
})
