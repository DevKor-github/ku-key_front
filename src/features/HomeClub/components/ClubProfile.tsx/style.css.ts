import { css, cva } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  pos: 'relative',
  w: 238,
  justifyContent: 'flex-end',
  smDown: { w: 18 },
})

export const ClubIcon = cva({
  base: {
    pos: 'absolute',
    left: 0,
    zIndex: 1,
    w: 23,
    smDown: { w: 6, left: -2 },
  },
  variants: {
    type: {
      hot: { top: { base: 120, smDown: 15 } },
      recommend: { top: { base: 140, smDown: 16 } },
    },
  },
})

export const ClubProfileWrapper = css({
  display: 'inline-flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 1.5,
})

export const ImageWrapper = css({
  w: 45,
  h: 60,
  rounded: 10,
  opacity: 0.8,
  border: '1px solid {colors.lightGray.1}',
  boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
  smDown: { w: 18, h: 24 },
})

export const Description = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: 4,
})

export const Title = css({
  display: 'flex',
  px: 1,
  flexDir: 'column',
  alignItems: 'flex-start',
  gap: 1.5,
  smDown: { w: 'full' },
})
