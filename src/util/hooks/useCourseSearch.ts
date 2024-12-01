import { useInfiniteQuery } from '@tanstack/react-query'

import {
  getAcademicFoundation,
  getByKeyword,
  getByKeywordInAcademicFoundation,
  getByKeywordInGeneral,
  getByKeywordInMajor,
  getGeneral,
  getMajor,
} from '@/api/hooks/course'
import { GetCourseResponse } from '@/api/types/course'
import { SemesterType } from '@/types/timetable'

export interface CourseSearchProps {
  queryKeyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
  year: string
  semester: SemesterType
}
export const useCourseSearch = ({ category, queryKeyword, semester, year, classification }: CourseSearchProps) => {
  return useInfiniteQuery({
    queryKey: ['courseSearchResult', queryKeyword, category, year, semester, classification],
    queryFn: ({ pageParam: cursorId }) => {
      if (queryKeyword === '') {
        if (category === 'General Studies') {
          return getGeneral({ cursorId, year, semester })
        }
        if (category === 'Major') {
          return getMajor({ major: classification!, cursorId, year, semester })
        }
        if (category === 'Academic Foundations') {
          return getAcademicFoundation({ college: classification!, cursorId, year, semester })
        }
        return new Promise<GetCourseResponse>(() => ({
          hasNextPage: false,
          nextCursorId: null,
          data: [],
        }))
      }

      if (category === 'General Studies') {
        return getByKeywordInGeneral({ keyword: queryKeyword, cursorId, year, semester })
      }
      if (category === 'Major') {
        return getByKeywordInMajor({ keyword: queryKeyword, major: classification!, cursorId, year, semester })
      }
      if (category === 'Academic Foundations') {
        return getByKeywordInAcademicFoundation({
          keyword: queryKeyword,
          college: classification!,
          cursorId,
          year,
          semester,
        })
      }
      return getByKeyword({ keyword: queryKeyword, cursorId, year, semester })
    },
    getNextPageParam: lastPage => {
      return lastPage?.nextCursorId === null ? undefined : lastPage?.nextCursorId
    },
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
    retry: false,
  })
}
