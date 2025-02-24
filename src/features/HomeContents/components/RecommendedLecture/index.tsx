import * as s from './style.css'

import CourseItem from '@/domain/Course/components/CourseItem'
import { Typography } from '@/ui/Typography'

const RecommendedLecture = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Title}>
        <Typography typography="heading1M" color="black" mobileTypography="titleSB">
          Lecture
        </Typography>
      </div>
      <div className={s.CourseList}>
        <CourseItem
          title="how to get rich how to get rich how to get rich"
          professor="John Doe"
          courseRate="4.5"
          semester="2025-Spring"
        />
        <CourseItem title="how to get rich" professor="John Doe" courseRate="2.5" semester="2025-Spring" />
        <CourseItem title="how to get rich" professor="John Doe" courseRate="1.5" semester="2025-Spring" />
        <CourseItem title="how to get rich" professor="John Doe" courseRate="4.5" semester="2025-Spring" />
      </div>
    </div>
  )
}

export default RecommendedLecture
