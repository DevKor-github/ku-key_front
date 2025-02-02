import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const SearchResultWrapper = style([f.flex, f.flexColumn, { gap: 10 }])

export const ClubCardWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: 60,
  },
  f.mdDown({
    gap: 40,
  }),
  f.smDown({
    gap: 14,
  }),
])

export const KeywordForDesktop = style([
  {
    margin: '30px 0',
    fontSize: 30,
    fontWeight: 700,
    color: vars.color.darkGray1,
  },
])

export const NoSearchResult = style([
  {
    color: vars.color.darkGray1,
    fontSize: 20,
  },
  f.mdDown({
    fontSize: 16,
  }),
])
