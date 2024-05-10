import { css } from '@styled-stytem/css'

const MemoryCarousel = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        h: 642,
        alignItems: 'center',
        color: 'black',
        bg: 'white',
      })}
    >
      MemoryCarousel
    </div>
  )
}

export default MemoryCarousel
