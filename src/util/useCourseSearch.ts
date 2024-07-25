import { useQuery } from '@tanstack/react-query'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { getByCourseCode, getByCourseNameInGeneral, getByCourseNameInMajor } from '@/api/hooks/course'
import { initCourseSearchData } from '@/util/timetableUtil'

export interface useCourseSearchProps {
  queryKeyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
  filter: 'course' | 'professor' | 'code'
}

export const useCourseSearch = ({ queryKeyword, category, classification, filter }: useCourseSearchProps) => {
  const authHeader = useAuthHeader()

  const { data } = useQuery({
    queryKey: ['courseSearchResult', queryKeyword],
    queryFn: () => {
      if (filter === 'code') {
        // 학수번호로 검색
        return getByCourseCode({ authHeader, courseCode: queryKeyword })
      } else if (filter === 'course') {
        // 강의명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByCourseNameInGeneral({ authHeader, courseName: queryKeyword })
        } else if (category === 'Major') {
          // 전공 내 검색
          return getByCourseNameInMajor({ authHeader, courseName: queryKeyword, major: classification! })
        }
      } else {
        // 교수명으로 검색
      }
    },
    enabled: !!queryKeyword,
    retry: false,
    initialData: initCourseSearchData,
  })

  return data
}
