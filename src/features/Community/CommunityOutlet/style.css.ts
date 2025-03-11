import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionRow, f.alignStart, { gap: '3.75rem' }])

export const LeftWrapper = style([f.flex, f.directionColumn, f.wFull, { gap: '5.375rem', maxWidth: '44.5625rem' }])
