import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, f.alignStart, { width: '22.4375rem', gap: '3rem' }])

export const TitleWrapper = style([f.flex, f.justifyBetween, f.wFull, f.alignEnd])

export const Title = style([f.flex, f.directionColumn, f.alignStart, { gap: '0.5rem' }])

export const ItemWrapper = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.625rem' }])
