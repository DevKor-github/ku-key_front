import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import InfoDetail from '@/components/courseReview/InfoDetail'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import ReviewTotalRate from '@/components/courseReview/ReviewTotalRate'

const CourseInfoPage = () => {
  const { courseCode, prof } = useParams()

  const { data } = useGetReviewSummary({ courseCode, professorName: prof })

  const hasReview = data !== undefined && data?.reviewCount > 0

  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 10 })}>
      <ReviewHeader courseName={data?.courseName ?? ''} prof={prof ?? ''} />
      <ReviewTotalRate
        totalRate={data?.totalRate}
        reviewCount={data?.reviewCount}
        courseCode={courseCode}
        prof={prof}
      />
      <InfoDetail
        hasReview={hasReview}
        attendance={data?.attendance}
        amountLearned={data?.amountLearned}
        classLevel={data?.classLevel}
        teachingSkills={data?.teachingSkills}
        teamProject={data?.teamProject}
      />
    </div>
  )
}

export default CourseInfoPage
