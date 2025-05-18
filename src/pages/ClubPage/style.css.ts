import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Banner = style([
  f.flex,
  f.alignCenter,
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontWeight: 700,
    color: vars.color.white,
    height: '9.375rem',
    fontSize: '1.5rem',
    padding: '0 1.875rem',
  },
])

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  f.alignCenter,
  f.wFull,
  {
    padding: '3rem 0.625rem',
    backgroundColor: vars.color.white,
  },
  f.smDown({
    padding: '1rem 0',
  }),
])

export const Contents = style([
  f.flex,
  f.flexColumn,
  f.wFull,
  {
    maxWidth: '62.5rem',
    gap: '5rem',
  },
  f.smDown({
    gap: '0.8rem',
  }),
])

export const ListContainer = style([
  f.flex,
  f.flexColumn,
  f.wFull,
  { gap: '2.5rem' },
  f.smDown({
    gap: '0.87rem',
  }),
])
