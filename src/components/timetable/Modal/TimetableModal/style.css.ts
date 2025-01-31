import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const ModalPortal = style([
  f.pFixed,
  f.wScreen,
  f.hScreen,
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  {
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    zIndex: 100,
  },
])

export const ModalCard = style([
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  f.directionColumn,
  vars.shadow.p25,
  {
    border: 'none',
    gap: 20,
    padding: '32px 40px',
    backgroundColor: vars.color.white,
  },
])
