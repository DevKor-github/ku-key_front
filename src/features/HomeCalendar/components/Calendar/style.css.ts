import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  pt: '13px',
  px: 2.5,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
  smDown: { px: 0, w: 'full' },
})

export const MonthWrapper = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
})

export const WeekWrapper = css({
  display: 'flex',
  w: 'full',
  maxW: 410,
  alignSelf: 'stretch',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  smDown: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem', textAlign: 'center' },
})
