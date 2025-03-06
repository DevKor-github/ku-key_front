import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flexColumn, f.alignCenter, { marginBottom: '10rem' }])

export const Contents = style([f.flexCenter, f.wFull])
