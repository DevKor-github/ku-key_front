import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  w: 'full',
  maxW: 1026,
})

export const InstitutionContainer = css({
  display: 'flex',
  flexDir: 'column',
  alignSelf: 'stretch',
  alignItems: 'flex-start',
})

export const Institution = css({
  display: 'flex',
  w: 'full',
  pt: 10,
  pb: 5,
  gap: '14px',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  smDown: { pt: 0 },
})

export const TitleWrapper = css({
  display: 'flex',
  pos: 'relative',
  w: 'full',
  maxW: 382,
  p: 4,
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 2.5,
})

export const Title = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  ml: '86px',
  smDown: { ml: '4rem' },
})

export const InstituteIcon = css({ display: 'flex', pos: 'absolute', w: '95px', smDown: { w: '4rem' } })

export const ProfileWrapper = css({
  display: 'flex',
  h: 'auto',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  mdDown: { px: 4 },
  smDown: { justifyContent: 'space-between', rowGap: 3 },
})
