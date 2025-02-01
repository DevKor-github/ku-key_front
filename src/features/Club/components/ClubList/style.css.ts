import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { b } from '@/style/breakpoints'
import { vars } from '@/theme/theme.css'

export const ClubCardWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: 60,
    '@media': {
      [b.mdDown]: {
        gap: 40,
      },
      [b.smDown]: {
        gap: 14,
      },
    },
  },
])

export const NoSearchResult = style({
  color: vars.color.darkGray1,
  fontSize: 20,

  '@media': {
    [b.mdDown]: {
      fontSize: 16,
    },
  },
})
