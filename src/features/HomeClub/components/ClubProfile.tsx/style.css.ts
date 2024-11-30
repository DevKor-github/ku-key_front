import { css, cva } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  pos: 'relative',
  w: 238,
  justifyContent: 'flex-end',
  smDown: { w: 20 },
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
