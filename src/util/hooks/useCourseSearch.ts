import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'
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
import { SemesterType } from '@/types/timetable'

interface CourseQueryInterface {
  keyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
}
const initialQuery: CourseQueryInterface = {
  category: 'All Class',
  keyword: '',
  classification: null,
}

interface CourseSearchProps {
  year: string
  semester: SemesterType
}
export const useCourseSearch = ({ year, semester }: CourseSearchProps) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const { keyword, category, classification } = searchQuery

  const search = (queryFn: (prev: CourseQueryInterface) => CourseQueryInterface) => {
    setSearchQuery(prev => queryFn(prev))
  }

  const { data, fetchNextPage, hasNextPage, isFetching, error } = useSuspenseInfiniteQuery({
    queryKey: ['courseSearchResult', year, semester, category, classification, keyword],
    queryFn: ({ pageParam: cursorId }) => {
      if (keyword.length) {
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

  return { searchQuery, data, search, fetchNextPage, hasNextPage, isFetching, error }
}
