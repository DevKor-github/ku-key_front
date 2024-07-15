import { css } from '@styled-stytem/css'
import { ChevronRight, Dot } from 'lucide-react'

import { SearchedCourse } from '@/types/course'

interface SearchLectureCardProps {
  data: SearchedCourse
  addCourse: (courseId: number) => void
}
const SearchLectureCard = ({ data, addCourse }: SearchLectureCardProps) => {
  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
        <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
          <span className={css({ fontSize: 16, fontWeight: 600, color: 'black.2' })}>{data.courseName}</span>
          <a
            href={data.syllabus}
            target="_blank"
            className={css({
              fontSize: 12,
              color: 'darkGray.1',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
            })}
          >
            Course plan <ChevronRight size={14} />
          </a>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', fontSize: 14, color: 'darkGray.1' })}>
          <span>{data.professorName}</span>
          <Dot />
          {/* todo: 실제 장소 api */}
          <span>미디어관 701호</span>
          <Dot />
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
            <span>{data.category}</span>|<span>{data.credit} credits</span>
          </div>
          <div className={css({ display: 'flex', gap: 2 })}>
            {/* todo:: 강의평 api */}
            <>별점</>
            <a href={data.syllabus} target="_blank">
              Review
              <ChevronRight size={20} />
            </a>
          </div>
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
        })}
        onClick={() => addCourse(data.id)}
      >
        Add class
      </button>
    </div>
  )
}

export default SearchLectureCard
