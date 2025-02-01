import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { justifyBetween } from '@/style/f.css'

export const Wrapper = style([f.flex, f.alignStart, justifyBetween])
