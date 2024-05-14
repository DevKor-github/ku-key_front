import { css } from '@styled-stytem/css'

const Mask = () => {
  return (
    <div
      className={css({
        display: 'flex',
        position: 'absolute',
        top: 20,
        left: 0,
        w: '100%',
        h: { base: 500, mdDown: 250 },
        opacity: 0.2,
        bg: 'linear-gradient(0deg, #000 38.03%, rgba(0, 0, 0, 0.20) 88.56%)',
        zIndex: 1,
      })}
    />
  )
}

export default Mask
