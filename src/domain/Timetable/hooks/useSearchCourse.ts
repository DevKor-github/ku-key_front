import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { GetCourseRequest, GetCourseResponse } from '@/api/types/course'
import { CourseCategoryType } from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import { TIMETABLE_QUERY_KEY } from '@/domain/Timetable/queries'
import { SemesterType } from '@/types/timetable'
import { apiInterface } from '@/util/axios/custom-axios'

export interface CourseSearchProps {
  year: string
  semester: SemesterType
  keyword: string
  category: CourseCategoryType
  classification: string | undefined
}

const searchCourse = async (params: GetCourseRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course', {
    params,
  })
  return response.data
}

export const useSearchCourse = ({ year, semester, keyword, category, classification }: CourseSearchProps) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useSuspenseInfiniteQuery({
    queryKey: TIMETABLE_QUERY_KEY.search({ year, semester, keyword, category, classification }),
    queryFn: ({ pageParam: cursorId }) =>
      searchCourse({
        cursorId,
        year,
        semester,
        keyword,
        category: category === 'All Class' ? undefined : category,
        classification,
      }),
    getNextPageParam: lastPage => {
      return lastPage.nextCursorId === null ? undefined : lastPage.nextCursorId
    },
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
    retry: false,
  })

  return { data: data ?? [], fetchNextPage, hasNextPage, isFetching }
}
