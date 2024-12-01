import { css } from '@styled-system/css'
import { useLocation } from 'react-router-dom'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import InfoDetail from '@/components/courseReview/InfoDetail'
import Review from '@/components/courseReview/Review'
import { CourseReviewQueryInterface, ReviewType } from '@/types/review'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const ReviewDetailPage = () => {
  const data = useLocation().state as ReviewType
  const [{ code: courseCode, prof }] = useQueryParams<CourseReviewQueryInterface>()
  const { data: infoData } = useGetReviewSummary({ courseCode, professorName: prof })

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
