import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'
export const MobileSchedule = style([f.flex, f.alignCenter, f.gap])
export const MobileScheduleIcon = style({
  flexShrink: 0,
  color: vars.color.red3,
})
export const MobileScheduleText = style([
  {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
])
