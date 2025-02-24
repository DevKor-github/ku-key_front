import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.wFull,
  f.hFull,
  f.pRelative,
  { borderBottom: `1.5px solid ${vars.color.lightGray2}` },
])

export const RelativeWrapper = style([
  f.flex,
  f.pAbsolute,
  f.wFull,
  f.hFull,
  f.alignCenter,
  f.justifyCenter,
  { padding: '3.125rem 0', top: 0, left: 0 },
])

export const EmblaViewport = style([f.overflowHidden])

export const EmblaContainer = style([f.flex, { backfaceVisibility: 'hidden' }])

export const EmblaSlide = style({
  flex: '0 0 100%',
  minWidth: 0,
  paddingLeft: '0',
  width: '100%',
})

export const LoginWrapper = style([f.flex, f.directionColumn, f.alignEnd, { width: '64.125rem', gap: '4.25rem' }])

export const LoginBox = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  {
    gap: '2.5rem',
    padding: '2.5rem',
    borderRadius: '30px',
    border: `1px solid ${vars.color.lightGray2}`,
    background: 'rgba(255, 255, 255, 0.80)',
    backdropFilter: 'blur(2px)',
  },
  f.smDown({ display: 'none' }),
])

export const LoginTitle = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.alignCenter,
  { gap: '1.25rem', alignSelf: 'stretch', width: '23.4375rem' },
])

export const ButtonWrapper = style([f.flex, f.wFull, f.alignCenter, { gap: '0.9375rem' }])

export const CarouselButton = style([
  f.flexCenter,
  f.pAbsolute,
  {
    bottom: '2.5rem',
    padding: '0.625rem 1.5rem',
    gap: '1.25rem',
    alignSelf: 'center',
    borderRadius: '99px',
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },
])

export const Icon = style([
  f.color.static.lightGray3,
  f.cursorPointer,
  { width: '1.25rem', aspectRatio: '1/1', strokeWidth: '2px' },
])
