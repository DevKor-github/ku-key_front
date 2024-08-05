import { css } from '@styled-stytem/css'

interface ReviewHeaderProps {
  courseName: string
  prof: string
}
const ReviewHeader = ({ courseName, prof }: ReviewHeaderProps) => {
  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
        <span className={css({ fontWeight: 600, fontSize: 26, color: 'black.2' })}>{courseName}</span>
        <span className={css({ fontSize: 18, color: 'darkGray.2' })}>{prof}</span>
      </div>
      <button
        className={css({
          bgColor: 'red.2',
          color: 'white',
          fontWeight: 700,
          fontSize: 12,
          px: 2.5,
          py: 1,
          rounded: 'full',
          cursor: 'pointer',
        })}
      >
        Write your Review
      </button>
    </div>
  )
}

export default ReviewHeader
