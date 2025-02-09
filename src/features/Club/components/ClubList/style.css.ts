import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const SearchResultWrapper = style([f.flex, f.flexColumn, { gap: 10 }])

export const ClubCardWrapper = style([
  { display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '3.12rem', columnGap: '2.5rem' },
  f.mdDown({
    gridTemplateColumns: '1fr',
  }),
])

export const KeywordForDesktop = style([
  vars.typography.desktop.titleSB,
  {
    margin: '1.875rem 0',
    color: vars.color.darkGray1,
  },
])

export const NoSearchResult = style([
  vars.typography.desktop.heading2R,
  {
    color: vars.color.darkGray1,
  },
  f.mdDown(vars.typography.mobile.headingR),
])
