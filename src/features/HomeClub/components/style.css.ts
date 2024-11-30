import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  bgColor: 'bg.gray',
  justifyContent: 'center',
  alignItems: 'center',
  w: 'full',
  maxW: 1026,
})

export const ClubWrapper = css({ display: 'flex', flexDir: 'column', smDown: { w: 'full' } })

export const ClubProfileWrapper = css({
  display: 'flex',
  gap: 5,
  alignItems: 'flex-start',
  justifyContent: 'center',
  smDown: { gap: 1.5, w: 'full', justifyContent: 'space-between', px: 4 },
})
