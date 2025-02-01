import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { b } from '@/style/breakpoints'
import { vars } from '@/theme/theme.css'

export const Banner = style([
  f.flex,
  f.alignCenter,
  {
    height: 400,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 64,
    fontWeight: 700,
    color: vars.color.white,
    padding: '0 230px',
    '@media': {
      [b.lgDown]: {
        height: 300,
        fontSize: 48,
        padding: '0 80px',
      },
      [b.mdDown]: {
        height: 200,
        fontSize: 32,
        padding: '0 50px',
      },
      [b.smDown]: {
        height: 150,
        fontSize: 24,
        padding: '0 30px',
      },
    },
  },
])

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  f.alignCenter,
  f.wFull,
  {
    padding: '120px 0',
    backgroundColor: vars.color.bgGray,
    '@media': {
      [b.smDown]: {
        padding: '15px 20px',
        backgroundColor: vars.color.white,
      },
    },
  },
])

export const Contents = style([
  f.flex,
  f.flexColumn,
  f.wFull,
  {
    maxWidth: 1300,
    gap: 85,
    '@media': {
      [b.smDown]: {
        gap: 30,
      },
    },
  },
])
