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
    <div
      className={css({
        display: 'flex',
        justifyContent: { base: 'space-between', mdDown: 'flex-start' },
        alignItems: { base: 'center', mdDown: 'flex-start' },
        gap: { base: 5, mdDown: 2 },
        flexDir: { base: 'row', mdDown: 'column' },
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 1,
          overflow: 'hidden',
          mdDown: { w: 'full' },
        })}
      >
        <span
          className={css({
            fontWeight: 600,
            fontSize: { base: 26, smDown: 20 },
            color: 'black.2',
            overflow: 'hidden',
            lineClamp: 2,
            textOverflow: 'ellipsis',
          })}
        >
          {courseName}
        </span>
        <span
          className={css({
            fontSize: { base: 18, smDown: 16 },
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
