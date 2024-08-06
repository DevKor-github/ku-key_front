import { css } from '@styled-stytem/css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetReviews, useGetReviewSummary } from '@/api/hooks/courseReview'
import CookiesRate from '@/components/courseReview/CookiesRate'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import { CriteriaType, DirectionType } from '@/types/review'

const ReviewPage = () => {
  const { courseCode = '', prof = '' } = useParams()

  const [criteria, setCriteria] = useState<CriteriaType>('createdAt')
  const [direction, setDirection] = useState<DirectionType>('DESC')

  const { data: totalData } = useGetReviewSummary({ courseCode, professorName: prof })
  const { data: reviewList } = useGetReviews({
    courseCode,
    professorName: prof,
    criteria,
    direction,
  })

  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 12 })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{totalData?.totalRate?.toFixed(1)}</span>
          <CookiesRate rate={totalData.totalRate} size={18} gap={4} />
          <span className={css({ fontSize: 14 })}>({totalData?.reviewCount})</span>
        </div>
        <ReviewHeader courseCode={courseCode} courseName={totalData.courseName} prof={prof} />
      </div>
    </div>
  )
}

export default ReviewPage
