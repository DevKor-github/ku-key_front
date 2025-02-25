import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { CourseCategoryType } from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import { TIMETABLE_QUERY_KEY } from '@/domain/Timetable/queries'
import { kuKeyClient } from '@/packages/api'
import { SemesterType } from '@/types/timetable'

export interface CourseSearchProps {
  year: string
  semester: SemesterType
  keyword: string
  category: CourseCategoryType
  classification: string | undefined
}

export const useSearchCourse = ({ year, semester, keyword, category, classification }: CourseSearchProps) => {
  const search = useAsyncRead(kuKeyClient.api.CourseApi.courseGet)

  const { data, fetchNextPage, hasNextPage, isFetching } = useSuspenseInfiniteQuery({
    queryKey: TIMETABLE_QUERY_KEY.search({ year, semester, keyword, category, classification }),
    queryFn: ({ pageParam: cursorId }) =>
      search({
        cursorId,
        year,
        semester: semester.toString(),
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
