import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.wFull, f.directionColumn, f.alignStart, { gap: '0.625rem' }])

export const BodyWrapper = style([f.flex, f.wFull, f.alignCenter, { gap: '0.875rem' }])
