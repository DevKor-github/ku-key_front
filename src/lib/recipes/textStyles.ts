import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  heading4_M: {
    description: 'Heading 4 Medium',
    value: {
      fontSize: 18,
      fontWeight: 500,
    },
  },
  body2_L: {
    description: 'Body 2 Large',
    value: {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  body3_L: {
    description: 'Body 3 Large',
    value: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
  title3: {
    description: 'Title 3',
    value: {
      fontSize: 26,
      fontWeight: 600,
    },
  },
})
