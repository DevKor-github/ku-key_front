import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const CloseArea = style([
  f.pFixed,
  f.wScreen,
  f.hScreen,
  {
    zIndex: 99,
    top: 0,
    left: 0,
  },
])

export const Wrapper = style([
  f.pFixed,
  f.wScreen,
  f.flex,
  f.justifyCenter,
  {
    zIndex: 100,
    transform: 'translate3d(0, 100%, 0)',
  },
  f.smDown({ display: 'none' }),
])

export const Contents = style([
  f.wFull,
  f.flexColumn,
  f.alignCenter,
  {
    backgroundColor: vars.color.white,
    boxShadow: vars.shadow.p25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backdropFilter: 'blur(25px)',
    paddingTop: '1.25rem',
  },
])
