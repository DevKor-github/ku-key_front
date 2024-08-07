import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai/react'

import InfoDetail from '@/components/courseReview/InfoDetail'
import ReviewHeader from '@/components/courseReview/ReviewHeader'
import TotalRate from '@/components/courseReview/TotalRate'
import { courseSummary } from '@/lib/store/review'

const CourseInfoPage = () => {
  const data = useAtomValue(courseSummary)

  return (
    <div className={css({ flexGrow: 1, display: 'flex', flexDir: 'column', gap: 10 })}>
      <ReviewHeader courseCode={data.courseCode} courseName={data.courseName} prof={data.prof} />
      <TotalRate
        totalRate={data.totalRate}
        reviewCount={data.reviewCount}
        courseCode={data.courseCode}
        prof={data.prof}
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
