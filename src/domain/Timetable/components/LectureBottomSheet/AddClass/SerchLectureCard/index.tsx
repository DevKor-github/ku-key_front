import { HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import * as s from './style.css'

import { usePostCourse } from '@/api/hooks/timetable'
import CookiesRate from '@/components/courseReview/CookiesRate'
import { SearchedCourse } from '@/types/course'

interface SearchLectureCardProps {
  data: SearchedCourse
  timetableId: number
  addCourse: (courseId: number) => void
}

const SearchLectureCard = ({ data, timetableId }: SearchLectureCardProps) => {
  const { mutate: addCourse } = usePostCourse()

  const handleAddCourse = () => {
    addCourse({ courseId: data.id, timetableId })
  }

  return (
    <div className={s.Wrapper}>
      <div className={s.Contents}>
        <div className={s.Header}>
          <div className={s.CourseOutline}>
            <Link className={s.Syllabus} to={data.syllabus} target="_blank">
              Course Plan
            </Link>
            <span className={s.CourseName}>{data.courseName}</span>
          </div>
          <div className={s.InfoAndReview}>
            <span className={s.CategoryAndCredits}>
              {data.category} | {data.credit} credits
            </span>
            <Link
              className={s.Review}
              target="_blank"
              to={`/course-review/info?code=${data.courseCode.slice(0, 7)}&professorName=${data.professorName}`}
            >
              <CookiesRate rate={data.totalRate} size={8} gap={2} />
              <HiChevronRight />
            </Link>
          </div>
        </div>
        <div className={s.Footer}>
          <div className={s.LeftFooter}>
            <span>{data.professorName}</span>
            {'•'}
            <span>{data.details && data.details[0]?.classroom}</span>
            {'•'}
            <span>{data.courseCode}</span>
          </div>
          <button className={s.AddButton} onClick={handleAddCourse}>
            Add class
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchLectureCard
