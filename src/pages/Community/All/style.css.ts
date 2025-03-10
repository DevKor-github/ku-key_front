import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, f.alignCenter, { marginTop: '2.5rem', gap: '2.5rem' }])

export const SelectTabWrapper = style([f.flex, f.alignStart, { width: '70.75rem' }, f.smDown({ width: '100%' })])
