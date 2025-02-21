import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, f.alignStart, { width: '64.125rem', gap: '1.25rem' }])

export const ContentBox = style([f.flex, f.alignStart, f.wFull, { gap: '1.25rem' }])
