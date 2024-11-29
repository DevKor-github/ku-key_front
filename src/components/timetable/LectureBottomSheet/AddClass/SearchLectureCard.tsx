import { css } from '@styled-system/css'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import CookiesRate from '@/components/courseReview/CookiesRate'
import { SearchedCourse } from '@/types/course'

interface SearchLectureCardProps {
  data: SearchedCourse
  addCourse: (courseId: number) => void
}

const SearchLectureCard = ({ data, addCourse }: SearchLectureCardProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pr: 4,
        gap: 10,
        lineHeight: 1.2,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
        <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
          <span className={css({ fontSize: 16, fontWeight: 600, color: 'black.2', maxW: '430px', lineClamp: 2 })}>
            {data.courseName}
          </span>
          <Link
            to={data.syllabus}
            target="_blank"
            className={css({
              fontSize: 12,
              color: 'darkGray.1',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            })}
          >
            Course plan <ChevronRight size={14} />
          </Link>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', fontSize: 14, color: 'darkGray.1', gap: 2.5 })}>
          <span>{data.professorName}</span>
          {'•'}
          <span>{data.details && data.details[0]?.classroom}</span>
          {'•'}
          <span>{data.courseCode}</span>
        </div>
        <div
          className={css({
            display: 'flex',
            gap: 5,
            alignItems: 'center',
            color: 'darkGray.1',
            fontSize: 12,
            fontWeight: 400,
          })}
        >
          <div className={css({ display: 'flex', gap: 2 })}>
            <span>
              {data.category}, {data.college}
            </span>
            |<span>{data.credit} credits</span>
          </div>
          <Link
            className={css({ display: 'flex', gap: 2 })}
            target="_blank"
            to={`/course-review/info/${data.courseCode.slice(0, 7)}/${data.professorName}`}
          >
            <CookiesRate rate={data.totalRate} size={8} gap={2} />
            <span>
              Review
              <ChevronRight size={14} />
            </span>
          </Link>
        </div>
      </div>
      <button
        className={css({
          rounded: 'full',
          bgColor: 'red.3',
          cursor: 'pointer',
          transition: 'background 0.256s',
          py: 1,
          px: 2.5,
          fontSize: 12,
          fontWeight: 700,
          color: 'white',
          _hover: { bgColor: 'red.2' },
          flexShrink: 0,
        })}
        onClick={() => addCourse(data.id)}
      >
        Add class
      </button>
    </div>
  )
}

export default SearchLectureCard
