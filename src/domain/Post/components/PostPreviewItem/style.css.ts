import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.625rem' }])
