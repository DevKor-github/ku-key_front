import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const ScheduleWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: '0.38rem',
  },
  f.smDown({
    gap: '0.12rem',
  }),
])

export const Schedule = style([
  f.flex,
  f.alignCenter,
  vars.typography.desktop.body1R,
  { gap: '0.38rem' },
  f.smDown(vars.typography.mobile.miniTag1R),
])

export const ScheduleIcon = style([
  {
    flexShrink: 0,
    color: vars.color.darkGray2,
    height: '1.5rem',
    width: '1.5rem',
  },
  f.smDown({
    width: '1rem',
    height: '1rem',
  }),
])

export const ScheduleText = style([
  {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
])
