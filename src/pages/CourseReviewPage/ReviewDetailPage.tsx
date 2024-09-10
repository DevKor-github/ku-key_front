import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai/react'
import { useLocation } from 'react-router-dom'

import InfoDetail from '@/components/courseReview/InfoDetail'
import Review from '@/components/courseReview/Review'
import { courseSummary } from '@/lib/store/review'
import { ReviewType } from '@/types/review'
import useScrollUp from '@/util/useScrollUp'

const ReviewDetailPage = () => {
  useScrollUp()
  const data = useLocation().state as ReviewType
  const infoData = useAtomValue(courseSummary)
  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 12, maxW: '820px' })}>
      <Review
        courseName={infoData.courseName}
        year={data.year}
        rate={data.rate}
        semester={data.semester}
        text={data.text}
      />
      <InfoDetail
        teamProject={data.teamProject}
        amountLearned={data.amountLearned}
        attendance={data.attendance}
        classLevel={data.classLevel}
        teachingSkills={data.teachingSkills}
      />
    </div>
  )
}

export default ReviewDetailPage
