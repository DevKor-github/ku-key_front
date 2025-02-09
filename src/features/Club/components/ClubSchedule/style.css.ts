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
    gap: '0.125rem',
    fontSize: '0.75rem',
    fontWeight: 400,
  }),
])

export const Schedule = style([f.flex, f.alignCenter, vars.typography.desktop.body1R, { gap: '0.25rem' }])

export const ScheduleIcon = style({
  flexShrink: 0,
  color: vars.color.red3,
  height: '1.5rem',
  width: '1.5rem',
})

export const ScheduleText = style([
  {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
])
