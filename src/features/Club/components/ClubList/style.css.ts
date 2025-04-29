import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const SearchResultWrapper = style([f.flex, f.flexColumn, { gap: '5rem' }])

export const ClubCardWrapper = style([
  { display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '3.12rem', columnGap: '2.5rem' },
  f.mdDown({
    gridTemplateColumns: '1fr',
    gap: '0.88rem',
  }),
  f.smDown({
    padding: '0 1.25rem',
  }),
])

export const KeywordForDesktop = style([
  vars.typography.desktop.titleSB,
  {
    color: vars.color.darkGray1,
  },
])

export const NoSearchResult = style([
  f.flexColumn,
  f.alignCenter,
  vars.typography.desktop.heading2R,
  {
    color: vars.color.darkGray1,
    gap: '1rem',
  },
  f.mdDown(vars.typography.mobile.headingR),
])

export const NoSearchResultImage = style([
  {
    width: '7rem',
    opacity: 0.7,
  },
  f.mdDown({
    width: '4rem',
  }),
])

export const ClubLine = style([
  f.wFull,
  {
    height: 1,
    backgroundColor: vars.color.lightGray2,
  },
])
