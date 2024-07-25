import { useQuery } from '@tanstack/react-query'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  getByCourseCode,
  getByCourseNameInGeneral,
  getByCourseNameInMajor,
  getByProfInGeneral,
  getByProfInMajor,
  getInAcademicFoundation,
} from '@/api/hooks/course'
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
      if (category === 'Academic Foundations') {
        // 검색 미진행, 바로 띄워주기
        return getInAcademicFoundation({ authHeader, college: classification! })
      }
      if (filter === 'code') {
        // 학수번호로 검색, category는 무조건 All Class
        return getByCourseCode({ authHeader, courseCode: queryKeyword })
      } else if (filter === 'course') {
        // 강의명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByCourseNameInGeneral({ authHeader, courseName: queryKeyword })
        }
        // 전공 내 검색
        return getByCourseNameInMajor({ authHeader, courseName: queryKeyword, major: classification! })
      } else if (filter === 'professor') {
        // 교수명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByProfInGeneral({ authHeader, professorName: queryKeyword })
        }
        // 전공 내 검색
        return getByProfInMajor({ authHeader, professorName: queryKeyword, major: classification! })
      }
    },
    enabled: !!queryKeyword,
    retry: false,
    initialData: initCourseSearchData,
  })

  return data
}
