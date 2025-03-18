import { css } from '@styled-system/css'
import { forwardRef, useCallback } from 'react'

import * as s from './style.css'

import { usePostCourse } from '@/api/hooks/timetable'
import { CourseQueryInterface } from '@/domain/Timetable/constants'
import { useSearchCourse } from '@/domain/Timetable/hooks/useSearchCourse'
import SearchLectureCard from '@/features/Timetable/components/LectureBottomSheet/AddClass/SerchLectureCard'
import { SemesterType } from '@/types/timetable'
import useIntersect from '@/util/hooks/useIntersect'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const SearchMessageStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'darkGray.2',
  fontSize: 16,
  fontWeight: 600,
})

interface Props {
  year: string
  semester: SemesterType
  timetableId: number
}
const SearchResult = forwardRef<HTMLDivElement, Props>(({ year, semester, timetableId }, ref) => {
  const { mutate: postCourse } = usePostCourse()
  const addCourse = useCallback((courseId: number) => postCourse({ courseId, timetableId }), [postCourse, timetableId])

  const [searchQuery] = useQueryParams<CourseQueryInterface>()
  const {
    data: searchData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSearchCourse({
    year,
    semester,
    category: searchQuery.category ?? 'All Class',
    classification: searchQuery.classification,
    keyword: searchQuery.keyword,
  })

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  // TODO: Vanilla-extract & Pagination 컴포넌트 사용 로직으로 변경
  if (searchData.length)
    return (
      <div ref={ref} className={s.Wrapper}>
        {searchData.map((data, index) => (
          <SearchLectureCard key={index} data={data} addCourse={addCourse} />
        ))}
        <div ref={fetchNextRef} className={css({ height: '0.25rem', flexShrink: 0 })} />
      </div>
    )

  return <div className={SearchMessageStyle}>There are no classes available for exchange students.</div>
})

export default SearchResult
