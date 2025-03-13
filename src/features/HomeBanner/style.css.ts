import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const Wrapper = style([
  f.flex,
  f.wFull,
  f.hFull,
  f.pRelative,
  f.directionColumn,
  f.alignCenter,
  { gap: '2.5rem' },
  f.smDown({ gap: '0' }),
])

export const RelativeWrapper = style([
  f.flex,
  f.pAbsolute,
  f.wFull,
  f.hFull,
  f.alignCenter,
  f.justifyCenter,
  { padding: '3.125rem 0', top: 0, left: 0 },
  f.smDown({ justifyContent: 'flex-end', padding: '0' }),
])

export const EmblaViewport = style([f.overflowHidden])

export const EmblaContainer = style([f.flex, { backfaceVisibility: 'hidden' }])

export const EmblaSlide = style([
  f.smDown({ borderRadius: 0, width: 'auto', height: 'auto' }),
  {
    flex: '0 0 auto',
    minWidth: 0,
    marginLeft: '1.25rem',
    display: 'block',
    width: '50rem',
    height: '25rem',
    borderRadius: '20px',
  },
])

export const CarouselButton = style([
  f.flexCenter,
  {
    display: 'none',
    padding: '0.625rem 1.5rem',
    gap: '1.25rem',
    borderRadius: '99px',
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },
  f.smDown({ display: 'none' }),
])

export const Icon = style([
  f.color.static.lightGray3,
  f.cursorPointer,
  { width: '1.25rem', aspectRatio: '1/1', strokeWidth: '2px' },
])

export const MobileCarouselButton = style([
  f.flexCenter,
  f.smDown({ display: 'none', alignItems: 'flex-end' }),
  {
    display: 'none',
    padding: '0.1875rem 0.5rem',
    borderRadius: '99px',
    background: 'rgba(0, 0, 0, 0.30)',
  },
])
