import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const SearchWrapper = style([f.flex, f.directionColumn, f.wFull, { gap: '1.875rem' }])

export const Header = style([f.flex, f.alignCenter, f.justifyBetween, f.wFull])

export const Title = style([f.flex, f.directionColumn, { gap: '0.375rem' }])
