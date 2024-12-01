import { css, cva } from '@styled-system/css'

export const Wrapper = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    alignSelf: 'stretch',
    w: 'full',
    maxW: 348,
    rounded: 3,
  },
  variants: {
    isSelected: {
      true: {
        bgColor: 'lightGray.2',
      },
      false: {
        bgColor: 'white',
      },
    },
  },
})

export const RedIndicator = cva({
  base: {
    w: 1.5,
    h: 'full',
    rounded: 3,
  },
  variants: {
    isSelected: {
      true: {
        bgColor: 'red.2',
      },
      false: {
        bgColor: 'white',
      },
    },
  },
})

export const Content = css({
  display: 'flex',
  w: 'full',
  alignSelf: 'stretch',
  py: 1.5,
  alignItems: 'center',
  gap: 1.5,
})

export const Date = css({
  display: 'flex',
  w: 'full',
  maxW: 15,
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TextBox = css({
  display: 'flex',
  px: '14px',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 2.5,
})
