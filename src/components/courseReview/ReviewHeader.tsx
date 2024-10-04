import { css, cva } from '@styled-system/css'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useGetCheckSubmission } from '@/api/hooks/courseReview'

interface ReviewHeaderProps {
  courseCode: string
  courseName: string
  prof: string
}
const ReviewHeader = ({ courseCode, courseName, prof }: ReviewHeaderProps) => {
  const { data: isReviewed } = useGetCheckSubmission({ courseCode, professorName: prof })

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isReviewed) {
        event.preventDefault()
      }
    },
    [isReviewed],
  )

  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5 })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 1,
          overflow: 'hidden',
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
        to={`/course-review/write/${courseCode}/${prof}`}
        onClick={handleClick}
        className={cva({
          base: {
            color: 'white',
            fontWeight: 700,
            fontSize: 12,
            px: 2.5,
            py: 1,
            rounded: 'full',
            flexShrink: 0,
          },
          variants: {
            isReviewed: {
              true: {
                bgColor: 'darkGray.2',
                cursor: 'default',
              },
              false: {
                bgColor: 'red.2',
                cursor: 'pointer',
              },
            },
          },
        })({ isReviewed })}
      >
        {isReviewed ? 'Already wrote Review' : 'Write your Review'}
      </Link>
    </div>
  )
}

export default ReviewHeader
