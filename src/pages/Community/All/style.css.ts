import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.directionColumn, { marginTop: '2.5rem', gap: '2.5rem' }])
