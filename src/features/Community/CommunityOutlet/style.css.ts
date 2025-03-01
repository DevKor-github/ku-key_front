import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionRow, f.alignStart, { gap: '3.75rem' }])

export const SearchWrapper = style([f.flex, f.directionColumn, f.wFull, { gap: '1.875rem', maxWidth: '44.5625rem' }])

export const Header = style([f.flex, f.alignCenter, f.justifyBetween, f.wFull])

export const Title = style([f.flex, f.directionColumn, { gap: '0.375rem' }])
