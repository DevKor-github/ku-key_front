import { css, cva } from '@styled-system/css'

export const Wrapper = css({ display: 'inline-flex', flexDir: 'column', alignItems: 'center', gap: '5px' })

export const Profile = cva({
  base: {
    display: 'flex',
    w: 20,
    aspectRatio: '1/1',
    rounded: 10,
    filter: 'drop-shadow(0px 0px 3.5px rgba(0, 0, 0, 0.25))',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    smDown: { w: 10, rounded: 8 },
    boxShadow: 'none',
  },
  variants: {
    onMouse: {
      true: {
        boxShadow: '0px 0px 10px 0px rgba(255, 0, 0, 0.50)',
      },
    },
  },
})

export const Image = css({
  display: 'flex',
  w: 20,
  aspectRatio: '1/1',
  rounded: 10,
  smDown: { w: 10, rounded: 8 },
})

export const TextWrapper = css({
  display: 'flex',
  w: 105,
  justifyContent: 'center',
  alignItems: 'center',
})
