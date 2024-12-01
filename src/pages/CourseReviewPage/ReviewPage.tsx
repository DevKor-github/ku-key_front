import { css, cva } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { useGetReviews, useGetReviewSummary } from '@/api/hooks/courseReview'
import CookiesRate from '@/components/courseReview/CookiesRate'
import ReviewCard from '@/components/courseReview/ReviewCard'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import Toast from '@/components/ui/toast'
import { KU_KEY_ERROR_LOG } from '@/lib/error'
import { CourseReviewQueryInterface, CriteriaType, DirectionType } from '@/types/review'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const CriteriaBtnStyle = cva({
  base: {
    h: 9,
    display: 'flex',
    gap: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 18,
    color: 'lightGray.1',
    px: 2.5,
    cursor: 'pointer',
    rounded: 'full',
    border: '1px solid {colors.lightGray.1}',
    bgColor: 'bg.gray',
    transition: 'all 0.256s',
  },
  variants: {
    selected: {
      true: {
        bgColor: 'bg.red.1',
        borderColor: 'red.1',
        color: 'red.1',
      },
    },
    fixHeight: {
      true: { w: 25 },
    },
  },
})

const ReviewPage = () => {
  const navigate = useNavigate()

  const [criteria, setCriteria] = useState<CriteriaType>('createdAt')
  const [direction, setDirection] = useState<DirectionType>('DESC')

  const [{ code: courseCode, prof }] = useQueryParams<CourseReviewQueryInterface>()
  const { data: totalData } = useGetReviewSummary({ courseCode, professorName: prof })

  const {
    data: reviewsData,
    isError,
    error,
  } = useGetReviews({
    courseCode,
    professorName: prof,
    criteria,
    direction,
  })

  if (isError && isAxiosError(error)) {
    if (error.response?.data.name === KU_KEY_ERROR_LOG.COURSE_REVIEW_NOT_VIEWABLE.name) {
      navigate(-1)
      toast.custom(() => <Toast message={KU_KEY_ERROR_LOG.COURSE_REVIEW_NOT_VIEWABLE.message} type="warning" />)
    }
  }

  return (
    <div
      className={css({
        flexGrow: 1,
        display: 'flex',
        flexDir: 'column',
        minW: 0,
        gap: 12,
        maxW: '820px',
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{totalData.totalRate.toFixed(1)}</span>
          <CookiesRate rate={totalData.totalRate} size={18} gap={4} />
          <span className={css({ fontSize: 14 })}>({totalData.reviewCount})</span>
        </div>
        <ReviewHeader courseCode={courseCode} courseName={totalData.courseName} prof={prof} />
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 7 })}>
          <span className={css({ display: 'flex', gap: 4, color: 'darkGray.2', fontSize: 18, alignItems: 'center' })}>
            <span className={css({ smDown: { display: 'none' } })}>Filtering</span>
            <span className={css({ display: 'flex', gap: 2.5 })}>
              <button
                className={CriteriaBtnStyle({ selected: criteria === 'createdAt' })}
                onClick={() => setCriteria('createdAt')}
              >
                Latest
              </button>
              {/* TODO: 강의평 좋아요 기능 추가 & 좋아요 순으로 모아보기 */}
              {/* <button
                className={CriteriaBtnStyle({ selected: criteria === 'recommendCount' })}
                onClick={() => setCriteria('recommendCount')}
              >
                Like
              </button> */}
              <button
                className={CriteriaBtnStyle({ selected: criteria === 'rate' })}
                onClick={() => setCriteria('rate')}
              >
                Rating
              </button>
            </span>
          </span>
          <button
            className={CriteriaBtnStyle({ fixHeight: true })}
            onClick={() => setDirection(p => (p === 'ASC' ? 'DESC' : 'ASC'))}
          >
            {direction === 'ASC' ? 'ASC' : 'DESC'}
            <motion.div animate={{ rotateZ: direction === 'ASC' ? 180 : 0 }}>
              <ChevronDown />
            </motion.div>
          </button>
        </div>
        {reviewsData && reviewsData.reviews.length ? (
          reviewsData.reviews.map(review => <ReviewCard key={review.id} data={review} />)
        ) : (
          <p
            className={css({
              display: 'flex',
              justifyContent: 'center',
              my: 10,
              color: 'darkGray.1',
              fontWeight: 500,
              fontSize: 16,
            })}
          >
            There are no course reviews. Please leave a review!
          </p>
        )}
      </div>
    </div>
  )
}

export default ReviewPage
