import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Banner = style([
  f.flex,
  f.alignCenter,
  {
    height: '25rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: '4rem',
    fontWeight: 700,
    color: vars.color.white,
    padding: '0 14.375rem',
  },
  f.lgDown({
    height: '18.75rem',
    fontSize: '3rem',
    padding: '0 5rem',
  }),
  f.mdDown({
    height: '12.5rem',
    fontSize: '2rem',
    padding: '0 3.125rem',
  }),
  f.smDown({
    height: '9.375rem',
    fontSize: '1.5rem',
    padding: '0 1.875rem',
  }),
])

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  f.alignCenter,
  f.wFull,
  {
    padding: '7.5rem 0.625rem',
    backgroundColor: vars.color.white,
  },
  f.smDown({
    padding: '1rem 1.25rem',
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
    gap: '1.875rem',
  }),
])

export const ListContainer = style([f.flex, f.flexColumn, f.wFull, { gap: '2.5rem' }])
