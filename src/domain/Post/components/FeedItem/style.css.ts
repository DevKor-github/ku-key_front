import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  f.cursorPointer,
  {
    gap: '2.5rem',
    paddingTop: '2.5rem',
    borderRadius: '10px',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
])

export const ContentsWrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.wFull,
  { gap: '1.25rem', padding: '0 1.25rem' },
])

export const Header = style([f.flex, f.justifyBetween, f.alignCenter, f.wFull])

export const LeftWrapper = style([f.flex, f.alignCenter, { gap: '1.25rem' }])

export const ViewCount = style([f.flex, f.alignCenter, f.color.static.darkGray2, { gap: '0.25rem' }])

export const FeedInfo = style([f.flex, f.justifyBetween, f.alignCenter, f.wFull, { padding: '2.5rem 1.25rem' }])

export const User = style([f.flex, f.alignCenter, { gap: '0.625rem' }])

export const FeedBack = style([f.flex, f.alignCenter, f.color.static.darkGray2, { gap: '1rem' }])

export const Icon = style([f.flex, f.alignCenter, { gap: '0.25rem' }])
