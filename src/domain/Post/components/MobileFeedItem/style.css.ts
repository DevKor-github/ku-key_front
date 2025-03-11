import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.alignStart,
  {
    gap: '0.625rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${vars.color.lightGray1}`,
    selectors: {
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
])

export const BodyWrapper = style([f.flex, f.wFull, f.alignCenter, { gap: '0.875rem' }])

export const Image = style([
  f.flex,
  {
    width: '5.625rem',
    aspectRatio: '1/1',
    objectFit: 'cover',
    flexShrink: 0,
    borderRadius: '11px',
    border: `1px solid ${vars.color.lightGray1}`,
  },
])

export const Text = style([
  f.flex,
  f.directionColumn,
  f.justifyBetween,
  f.alignStart,
  f.wFull,
  { height: '5.625rem', padding: '0.125rem 0', flexShrink: 0 },
])

export const Tag = style([f.flex, f.alignCenter, { gap: '0.25rem' }])

export const Icon = style([f.color.static.red3, { width: '0.8125rem', height: '0.8125rem' }])

export const TypoWrapper = style([f.wFull, f.flex, f.alignCenter])

export const FeedbackWrapper = style([f.flex, f.wFull, f.justifyBetween, f.alignCenter])

export const Profile = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

export const FeedBack = style([f.flex, f.alignCenter, f.color.static.darkGray2, { gap: '0.625rem' }])

export const FeedBackIcon = style([f.flex, f.alignCenter, { gap: '0.25rem' }])
