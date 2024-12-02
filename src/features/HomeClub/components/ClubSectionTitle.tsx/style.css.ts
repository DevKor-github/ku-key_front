import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  pt: 2.5,
  pb: '30px',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  smDown: { px: 4 },
})

export const TitleWrapper = css({
  display: 'flex',
  pl: '3px',
  pt: 5,
  pb: 2.5,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2.5,
  smDown: { p: 0 },
})
