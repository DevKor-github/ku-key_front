import { useInfiniteQuery } from '@tanstack/react-query'

import {
  getByCourseCode,
  getByCourseNameInGeneral,
  getByCourseNameInMajor,
  getByProfInGeneral,
  getByProfInMajor,
  getInAcademicFoundation,
} from '@/api/hooks/course'

export interface useCourseSearchProps {
  queryKeyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
  filter: 'course' | 'professor' | 'code'
}

export const useCourseSearch = (props: useCourseSearchProps) => {
  const { queryKeyword, category, classification, filter } = props

  return useInfiniteQuery({
    queryKey: ['courseSearchResult', props],
    queryFn: ({ pageParam: cursorId }) => {
      if (category === 'Academic Foundations') {
        // 검색 미진행, 바로 띄워주기
        return getInAcademicFoundation({ college: classification!, cursorId })
      }
      if (filter === 'code') {
        // 학수번호로 검색, category는 무조건 All Class
        return getByCourseCode({ courseCode: queryKeyword, cursorId })
      } else if (filter === 'course') {
        // 강의명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByCourseNameInGeneral({ courseName: queryKeyword, cursorId })
        }
        // 전공 내 검색
        return getByCourseNameInMajor({ courseName: queryKeyword, major: classification!, cursorId })
      }
      // 교수명으로 검색
      if (category === 'General Studies') {
        // 교양 내 검색
        return getByProfInGeneral({ professorName: queryKeyword, cursorId })
      }
      // 전공 내 검색
      return getByProfInMajor({ professorName: queryKeyword, major: classification!, cursorId })
    },
    getNextPageParam: lastPage => {
      return lastPage?.nextCursorId === null ? undefined : lastPage?.nextCursorId
    },
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
    enabled: !!queryKeyword,
    retry: false,
  })
}
