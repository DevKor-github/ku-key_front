import { useQuery } from '@tanstack/react-query'

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

  const { data } = useQuery({
    queryKey: ['courseSearchResult', props],
    queryFn: () => {
      if (category === 'Academic Foundations') {
        // 검색 미진행, 바로 띄워주기
        return getInAcademicFoundation({ college: classification! })
      }
      if (filter === 'code') {
        // 학수번호로 검색, category는 무조건 All Class
        return getByCourseCode({ courseCode: queryKeyword })
      } else if (filter === 'course') {
        // 강의명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByCourseNameInGeneral({ courseName: queryKeyword })
        }
        // 전공 내 검색
        return getByCourseNameInMajor({ courseName: queryKeyword, major: classification! })
      } else if (filter === 'professor') {
        // 교수명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByProfInGeneral({ professorName: queryKeyword })
        }
        // 전공 내 검색
        return getByProfInMajor({ professorName: queryKeyword, major: classification! })
      }
    },
    enabled: !!queryKeyword,
    retry: false,
    initialData: { hasNextPage: false, nextCursorId: 0, data: [] },
  })

  return { data }
}
