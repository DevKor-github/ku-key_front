import { css, cva } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai/react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetReviews } from '@/api/hooks/courseReview'
import CookiesRate from '@/components/courseReview/CookiesRate'
import ReviewCard from '@/components/courseReview/ReviewCard'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import { courseSummary } from '@/lib/store/review'
import { CriteriaType, DirectionType } from '@/types/review'

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
  const { courseCode = '', prof = '' } = useParams()

  const [criteria, setCriteria] = useState<CriteriaType>('createdAt')
  const [direction, setDirection] = useState<DirectionType>('DESC')

  const totalData = useAtomValue(courseSummary)
  const { data: reviewsData } = useGetReviews({
    courseCode,
    professorName: prof,
    criteria,
    direction,
  })

  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 12 })}>
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
            Filtering
            <span className={css({ display: 'flex', gap: 2.5 })}>
              <button
                className={CriteriaBtnStyle({ selected: criteria === 'createdAt' })}
                onClick={() => setCriteria('createdAt')}
              >
                Latest
              </button>
              <button
                className={CriteriaBtnStyle({ selected: criteria === 'recommendCount' })}
                onClick={() => setCriteria('recommendCount')}
              >
                Like
              </button>
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
        {reviewsData.reviews.map(review => (
          <ReviewCard key={review.id} data={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewPage
