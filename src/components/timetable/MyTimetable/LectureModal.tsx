import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

const LectureModal = () => {
  return (
    <div
      className={cx(
        css({
          w: 'calc(100vw - 298px)',
          h: '40vh',
          rounded: 50,
          mb: 3,
          bgColor: '#F7F7F7CC',
          backdropFilter: 'blur(10px)',
        }),
        shadow(),
      )}
    ></div>
  )
}

export default LectureModal
