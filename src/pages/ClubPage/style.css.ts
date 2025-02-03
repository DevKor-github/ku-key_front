import { style } from '@vanilla-extract/css'

import { f } from '@/style'
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
  },
  f.lgDown({
    height: 300,
    fontSize: 48,
    padding: '0 80px',
  }),
  f.mdDown({
    height: 200,
    fontSize: 32,
    padding: '0 50px',
  }),
  f.smDown({
    height: 150,
    fontSize: 24,
    padding: '0 30px',
  }),
])

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  f.alignCenter,
  f.wFull,
  {
    padding: '120px 10px',
    backgroundColor: vars.color.white,
  },
  f.smDown({
    padding: '15px 20px',
  }),
])

export const Contents = style([
  f.flex,
  f.flexColumn,
  f.wFull,
  {
    maxWidth: 1000,
    gap: 85,
  },
  f.smDown({
    gap: 30,
  }),
])
