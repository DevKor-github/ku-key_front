import { css } from '@styled-stytem/css'
import { Link } from 'react-router-dom'

interface ReviewHeaderProps {
  courseCode: string
  courseName: string
  prof: string
}
const ReviewHeader = ({ courseCode, courseName, prof }: ReviewHeaderProps) => {
  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
      <div
        className={css({
          display: 'flex',
          gap: 5,
          alignItems: 'center',
          maxW: '75%',
        })}
      >
        <span
          className={css({
            fontWeight: 600,
            fontSize: 26,
            color: 'black.2',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          })}
        >
          {courseName}
        </span>
        <span
          className={css({
            fontSize: 18,
            color: 'darkGray.2',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          })}
        >
          {prof}
        </span>
      </div>
      <Link
        // TODO: 이미 작성한 사람이면 막아놓기
        to={`/course-review/write/${courseCode}/${prof}`}
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
      </Link>
    </div>
  )
}

export default ReviewHeader
