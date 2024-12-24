import { css } from '@styled-system/css'
import { forwardRef, useCallback } from 'react'

import { usePostCourse } from '@/api/hooks/timetable'
import SearchLectureCard from '@/components/timetable/LectureBottomSheet/AddClass/SearchLectureCard'
import { SemesterType } from '@/types/timetable'
import { useCourseSearch } from '@/util/hooks/courseSearch/useCourseSearch'
import { CourseQueryInterface } from '@/util/hooks/courseSearch/useCourseSearchQuery'
import useIntersect from '@/util/hooks/useIntersect'

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
  searchQuery: CourseQueryInterface
  timetableId: number
  isInitial: boolean
}
const CourseSearchDataList = forwardRef<HTMLDivElement, Props>(
  ({ year, semester, searchQuery, timetableId, isInitial }, ref) => {
    const { mutate: postCourse } = usePostCourse()
    const addCourse = useCallback(
      (courseId: number) => postCourse({ courseId, timetableId }),
      [postCourse, timetableId],
    )
    const {
      data: searchData,
      fetchNextPage,
      hasNextPage,
      isFetching,
    } = useCourseSearch({
      year,
      semester,
      category: searchQuery.category,
      classification: searchQuery.classification,
      keyword: searchQuery.keyword,
    })

    const fetchNextRef = useIntersect(async (entry, observer) => {
      observer.unobserve(entry.target)
      if (hasNextPage && !isFetching) fetchNextPage()
    })

    if (searchData.length)
      return (
        <div
          ref={ref}
          className={css({
            overflowY: 'auto',
            display: 'flex',
            flexDir: 'column',
            gap: 5,
            overscrollBehavior: 'contain',
          })}
        >
          {searchData.map((data, index) => (
            <SearchLectureCard key={index} data={data} addCourse={addCourse} />
          ))}
          <div ref={fetchNextRef} className={css({ height: 1 })} />
        </div>
      )

    if (isInitial)
      return (
        <div className={SearchMessageStyle}>
          Enter keywords to search (e.g., course name, professor name, or course number)
        </div>
      )

    return <div className={SearchMessageStyle}>There are no classes available for exchange students.</div>
  },
)

export default CourseSearchDataList
