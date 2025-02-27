import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  { width: '64.125rem', gap: '1.875rem' },
  f.smDown({ gap: '1rem', width: '100%', padding: '0 0 0 1.25rem' }),
])

export const Box = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '1.5rem' }])

export const ChipWrapper = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

export const ItemWrapper = style([
  f.flex,
  f.alignStart,
  f.wFull,
  { gap: '2rem' },
  f.smDown({
    gap: '0.625rem',
    overflowX: 'scroll',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  }),
])

export const ItemBox = style([
  f.flex,
  f.directionColumn,
  f.alignStart,
  f.cursorPointer,
  { gap: '0.875rem' },
  f.smDown({
    gap: '0.3125rem',
    flexShrink: 0,
    selectors: {
      '&:last-child': {
        marginRight: '1.25rem',
      },
    },
  }),
])

export const ItemImage = style([
  {
    width: '11.25rem',
    height: '15rem',
    borderRadius: '11px',
    border: `0.75px solid ${vars.color.lightGray1}`,
  },
  f.smDown({ width: '7.5rem', height: '10rem' }),
])

export const Description = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.alignStart,
  { maxWidth: '11.25rem' },
  f.smDown({ gap: '0.125rem', width: '7.5rem' }),
])

export const DescriptionText = style([
  f.flex,
  f.alignCenter,
  f.wFull,
  { gap: '0.625rem' },
  f.smDown({ gap: '0.25rem' }),
])

export const LoadWrapper = style([f.flexCenter, f.wFull, { height: '18.75rem' }])
