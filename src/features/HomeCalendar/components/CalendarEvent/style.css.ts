import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  w: 'full',
  maxW: 398,
  maxH: '493px',
  flexDir: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
})

export const Month = css({ display: 'flex', p: 5, alignItems: 'center' })

export const ScrollableBox = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  gap: 5,
  w: 'full',
  maxH: 422,
  overflowY: 'scroll',
  p: 1,
})
