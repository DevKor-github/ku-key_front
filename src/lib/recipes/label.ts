import { defineRecipe } from '@pandacss/dev'

export const labelRecipe = defineRecipe({
  className: 'label',
  description: 'Label component',
  base: {
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'black.1',
    lineHeight: 1,
    _peerDisabled: { cursor: 'not-allowed', opacity: 70 },
  },
})
