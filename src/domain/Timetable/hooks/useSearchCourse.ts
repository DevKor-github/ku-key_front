import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { GetCourseRequest, GetCourseResponse } from '@/api/types/course'
import { CourseCategoryType } from '@/domain/Timetable/constants'
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

const readCourse = async (params: GetCourseRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course', {
    params,
  })
  return response.data
}

export const useSearchCourse = ({ year, semester, keyword, category, classification }: CourseSearchProps) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useSuspenseInfiniteQuery({
    queryKey: TIMETABLE_QUERY_KEY.search({ year, semester, keyword, category, classification }),
    queryFn: ({ pageParam: cursorId }) =>
      readCourse({
        cursorId,
        year,
        semester,
        keyword: keyword ? keyword : undefined,
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
