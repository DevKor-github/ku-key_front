import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { match } from 'ts-pattern'

import {
  getAcademicFoundation,
  getAllCourse,
  getByKeyword,
  getByKeywordInAcademicFoundation,
  getByKeywordInGeneral,
  getByKeywordInMajor,
  getGeneral,
  getMajor,
} from '@/api/hooks/course'
import { CourseCategoryType } from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import { SemesterType } from '@/types/timetable'

interface Props {
  year: string
  semester: SemesterType
  keyword: string
  category: CourseCategoryType
  classification: string | null
}
export const useCourseSearch = ({ year, semester, keyword, category, classification }: Props) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useSuspenseInfiniteQuery({
    queryKey: ['courseSearchResult', year, semester, category, classification, keyword],
    queryFn: ({ pageParam: cursorId }) => {
      if (keyword && keyword.length) {
        return match(category)
          .with('Major', () => getByKeywordInMajor({ keyword, major: classification!, cursorId, year, semester }))
          .with('General Studies', () => getByKeywordInGeneral({ keyword, cursorId, year, semester }))
          .with('Academic Foundations', () =>
            getByKeywordInAcademicFoundation({
              keyword,
              college: classification!,
              cursorId,
              year,
              semester,
            }),
          )
          .otherwise(() => getByKeyword({ keyword, cursorId, year, semester }))
      }

      return match(category)
        .with('Major', () => getMajor({ major: classification!, cursorId, year, semester }))
        .with('General Studies', () => getGeneral({ cursorId, year, semester }))
        .with('Academic Foundations', () =>
          getAcademicFoundation({ college: classification!, cursorId, year, semester }),
        )
        .otherwise(() => getAllCourse())
    },
    getNextPageParam: lastPage => {
      return lastPage?.nextCursorId === null ? undefined : lastPage?.nextCursorId
    },
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
    retry: false,
  })

  return { data: data ?? [], fetchNextPage, hasNextPage, isFetching }
}
