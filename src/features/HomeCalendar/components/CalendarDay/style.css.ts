import { css, cva } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  w: '50px',
  h: '65px',
  pb: '5px',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  smDown: { w: 'full', h: 'auto' },
})

export const Box = css({
  display: 'flex',
  pb: 2.5,
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: -1.5,
})

export const Day = css({
  display: 'flex',
  w: '3.125rem',
  aspectRatio: '1/1',
  justifyContent: 'center',
  alignItems: 'center',
  textStyle: 'heading3_L',
  rounded: 'full',
  gap: 2.5,
  transition: 'all 0.25s ease',
  smDown: {
    w: '2rem',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
  },
})

export const Dot = cva({
  base: {
    display: 'flex',
    w: '5px',
    h: '5px',
    bgColor: 'transparent',
    rounded: 'full',
  },
  variants: {
    hasEvent: {
      true: {
        bgColor: 'red.2',
      },
    },
  },
})
