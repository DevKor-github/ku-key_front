import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import CookiesRate from '@/components/courseReview/CookiesRate'
import { CourseReviewQueryInterface, ReviewType } from '@/types/review'
import { useQueryParams } from '@/util/hooks/useQueryParams'
import { numberToSemester } from '@/util/timetableUtil'

interface ReviewCardProps {
  data: ReviewType
}
const ReviewCard = ({ data }: ReviewCardProps) => {
  const [{ code, professorName }] = useQueryParams<CourseReviewQueryInterface>()
  return (
    <div className={cx(shadow(), css({ display: 'flex', gap: 5, flexDir: 'column', rounded: 10, p: 5 }))}>
      <div className={css({ fontSize: 14, fontWeight: 700, color: 'lightGray.1' })}>
        {data.year} {numberToSemester[data.semester]} semester
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{data.rate.toFixed(1)}</span>
          <CookiesRate rate={data.rate} size={18} gap={4} />
        </div>
        <Link
          to={`/course-review/review/?code=${code}&professorName=${professorName}&id=${data.id}`}
          state={data}
          className={css({
            fontSize: 18,
            color: 'darkGray.2',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          })}
        >
          Details <ChevronRight size={18} />
        </Link>
      </div>
      <div
        className={css({
          color: 'lightGray.1',
          fontSize: 14,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineClamp: 2,
        })}
      >
        {data.text}
      </div>
    </div>
  )
}

export default ReviewCard
