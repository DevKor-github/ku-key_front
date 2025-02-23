import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  { gap: '0.625rem', maxWidth: '18.375rem' },
  f.smDown({ width: '100%', maxWidth: '100%' }),
])

export const Title = style([f.flex, f.justifyBetween, f.alignCenter, f.wFull])

export const CourseList = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  { gap: '0.5625rem' },
  f.smDown({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.625rem',
  }),
])
