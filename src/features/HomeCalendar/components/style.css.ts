import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  w: 'full',
  flexDir: 'column',
  maxW: 1026,
})

export const CalendarCard = css({
  display: 'inline-flex',
  w: 'full',
  alignItems: 'flex-start',
  pt: '30px',
  pl: 10,
  pr: 5,
  pb: 5,
  rounded: 20,
  bgColor: 'white',
  smDown: { flexDir: 'column', p: '1rem 1rem 0', border: '1px solid {colors.lightGray.1}' },
})

export const CalendarWithEvent = css({
  display: 'flex',
  flexDir: 'row',
  gap: 5,
  maxW: 1026,
  w: 'full',
  smDown: { px: '1rem' },
})
