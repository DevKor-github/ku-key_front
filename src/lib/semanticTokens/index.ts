import { defineSemanticTokens } from '@pandacss/dev'

import { tokenToRem } from '@/lib/constants/tokenToRem'

export const semanticTokens = defineSemanticTokens({
  spacing: { ...tokenToRem, mobileHeader: { value: '40px' } },
})
