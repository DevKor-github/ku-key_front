import * as s from './style.css'

import CourseItem from '@/domain/Course/components/CourseItem'
import { useReadCourseRecommendation } from '@/domain/Course/hooks/useReadCourseRecommendation'
import { Typography } from '@/ui/Typography'

const RecommendedLecture = () => {
  const { data: courseRecommendation } = useReadCourseRecommendation({ limit: 4 })
  return (
    <div className={s.Wrapper}>
      <div className={s.Title}>
        <Typography typography="heading1M" color="black" mobileTypography="titleSB">
          Lecture
        </Typography>
      </div>
      <div className={s.CourseList}>
        {courseRecommendation.map(course => (
          <CourseItem key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedLecture
