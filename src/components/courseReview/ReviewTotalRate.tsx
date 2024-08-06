import { css } from '@styled-stytem/css'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import CookiesRate from '@/components/courseReview/CookiesRate'

interface ReviewTotalRateProps {
  totalRate?: number
  reviewCount?: number
  courseCode?: string
  prof?: string
}
const ReviewTotalRate = ({ totalRate, reviewCount, courseCode, prof }: ReviewTotalRateProps) => {
  const viewRate = totalRate ?? 0
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 5,
        rounded: 10,
        boxShadow: '0px 0px 4px 0px #00000040',
        px: 5,
        pt: 5,
        pb: 10,
      })}
    >
      <div className={css({ fontWeight: 700, color: 'lightGray.1', fontSize: 14 })}>Course Review Total Rate</div>
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
        <div className={css({ display: 'flex', gap: 2.5, color: 'darkGray.2', alignItems: 'center' })}>
          <span className={css({ fontSize: 18 })}>{totalRate?.toFixed(1)}</span>
          <CookiesRate rate={viewRate} size={18} gap={4} />
          <span className={css({ fontSize: 14 })}>({reviewCount})</span>
        </div>
        <Link
          to={`/course-review/detail/${courseCode}/${prof}`}
          className={css({
            fontSize: 18,
            color: 'darkGray.2',
            display: 'flex',
            alignItems: 'center',
          })}
        >
          Course Review <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  )
}

export default ReviewTotalRate
