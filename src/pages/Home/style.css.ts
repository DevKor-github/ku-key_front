import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([f.flex, f.alignStart, f.justifyCenter, f.background.white, { gap: '7.5rem' }])
