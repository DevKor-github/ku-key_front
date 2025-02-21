import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  { gap: '0.625rem', maxWidth: '18.375rem' },
])

export const Title = style([f.flex, f.justifyBetween, f.alignCenter, f.wFull])

export const CourseList = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.5625rem' }])
