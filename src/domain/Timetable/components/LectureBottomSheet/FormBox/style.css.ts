import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flexRow, f.alignCenter, { gap: '1.25rem' }])
