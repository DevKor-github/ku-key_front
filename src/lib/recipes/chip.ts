import { defineRecipe } from '@pandacss/dev'

export const chipRecipe = defineRecipe({
  className: 'chip',
  description: 'A chip component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { base: 2, mdDown: 1 },
    py: { base: 1, mdDown: 0.5 },
    rounded: 3.5,
    fontSize: { base: 15, mdDown: 8 },
    fontWeight: '500',
    lineHeight: 'normal',
  },
  variants: {
    variant: {
      default: {
        bgColor: 'white',
        color: 'red.2',
      },
      red3: {
        bgColor: 'red.3',
        color: 'white',
      },
      red4: {
        bgColor: 'red.4',
        color: 'red.2',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
