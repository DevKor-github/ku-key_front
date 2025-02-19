import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.flexColumn,
  {
    padding: '1.31rem 1.25rem',
    gap: '1.56rem',
  },
])

export const Header = style([
  f.flexColumn,
  {
    gap: '0.75rem',
  },
])

export const Search = style([f.flexRow, f.alignCenter])

export const UserPlusButton = style({
  width: '1.2rem',
  color: vars.color.darkGray2,
  margin: '0 0.775rem 0 1.025rem',
})
