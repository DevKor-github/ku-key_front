import { css, cva } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgColor: 'bg.gray',
  w: 'full',
  pt: { base: '3.125rem', smDown: 0 },
  pb: { base: 25, smDown: 0 },
})
export const CarouselButtonWrapper = css({
  display: 'flex',
  w: 'full',
  maxW: 608,
  pos: 'absolute',
  h: 75,
  rounded: 20,
  alignItems: 'center',
  justifyContent: 'space-between',
  minW: 0,
  px: '61px',
})

export const CarouselButton = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
    right: 630,
    rounded: 'full',
    w: 10,
    h: 10,
    zIndex: 50,
    bgColor: 'lightGray.1',
    opacity: 0.7,
    cursor: 'pointer',
  },
  variants: {
    position: {
      left: { left: 630 },
      right: { right: 630 },
    },
  },
})

export const CarouselPlayButtonWrapper = css({
  display: 'flex',
  w: 'full',
  maxW: 608,
  pos: 'absolute',
  h: 75,
  smDown: { h: '12.02688rem', pr: '1.56rem' },
  rounded: 20,
  flexDir: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  minW: 0,
  pr: '89px',
  pb: '22px',
})

export const CarouselPlayButton = css({
  display: 'inline-flex',
  pl: 3.5,
  pr: 3,
  py: 1,
  alignItems: 'center',
  gap: 2.5,
  rounded: 48,
  bgColor: 'rgba(0,0,0,0.20)',
  cursor: 'pointer',
})

export const CarouselPlayText = css({
  display: 'flex',
  pt: '1px',
  gap: '3px',
  color: 'white',
  fontSize: '14px',
  fontWeight: 700,
  smDown: { fontSize: '0.75rem', fontWeight: 500 },
})
