import { css } from '@styled-system/css'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import InfoDetail from '@/components/courseReview/InfoDetail'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import TotalRate from '@/components/courseReview/TotalRate'
import { CourseReviewQueryInterface } from '@/types/review'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const CourseInfoPage = () => {
  const [{ code: courseCode, professorName }] = useQueryParams<CourseReviewQueryInterface>()
  const { data } = useGetReviewSummary({ courseCode, professorName })

  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 10, maxW: '820px', minW: 0 })}>
      <ReviewHeader courseCode={courseCode} courseName={data.courseName} professorName={professorName} />
      <TotalRate
        totalRate={data.totalRate}
        reviewCount={data.reviewCount}
        courseCode={courseCode}
        professorName={professorName}
      />
      <InfoDetail
        attendance={data.attendance}
        amountLearned={data.amountLearned}
        classLevel={data.classLevel}
        teachingSkills={data.teachingSkills}
        teamProject={data.teamProject}
      />
    </div>
  )
}

export default CourseInfoPage
