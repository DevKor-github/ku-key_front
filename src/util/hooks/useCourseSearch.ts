import { useInfiniteQuery } from '@tanstack/react-query'

import {
  getByCourseCode,
  getByCourseNameInGeneral,
  getByCourseNameInMajor,
  getByKeyword,
  getByKeywordInAcademicFoundation,
  getByKeywordInGeneral,
  getByKeywordInMajor,
  getByProfInGeneral,
  getByProfInMajor,
  getGeneral,
  getInAcademicFoundation,
  getMajor,
} from '@/api/hooks/course'
import { GetCourseResponse } from '@/api/types/course'
import { SemesterType } from '@/types/timetable'

export interface useCourseSearchProps {
  queryKeyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
  filter: 'course' | 'professor' | 'code'
  year: string
  semester: SemesterType
}

export const useCourseSearch = ({
  queryKeyword,
  category,
  classification,
  filter,
  year,
  semester,
}: useCourseSearchProps) => {
  return useInfiniteQuery({
    queryKey: ['courseSearchResult', queryKeyword, category, classification, filter, year, semester],
    queryFn: ({ pageParam: cursorId }) => {
      if (category === 'Academic Foundations') {
        // 검색 미진행, 바로 띄워주기
        return getInAcademicFoundation({ college: classification!, cursorId, year, semester })
      }

      if (queryKeyword === '') {
        if (category === 'General Studies') {
          return getGeneral({ cursorId, year, semester })
        }
        if (category === 'Major') {
          return getMajor({ major: classification!, cursorId, year, semester })
        }
        return new Promise<GetCourseResponse>(() => ({
          hasNextPage: false,
          nextCursorId: null,
          data: [],
        }))
      }

      if (filter === 'course') {
        // 강의명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByCourseNameInGeneral({ courseName: queryKeyword, cursorId, year, semester })
        }
        // 전공 내 검색
        return getByCourseNameInMajor({ courseName: queryKeyword, major: classification!, cursorId, year, semester })
      } else if (filter === 'professor') {
        // 교수명으로 검색
        if (category === 'General Studies') {
          // 교양 내 검색
          return getByProfInGeneral({ professorName: queryKeyword, cursorId, year, semester })
        }
        // 전공 내 검색
        return getByProfInMajor({ professorName: queryKeyword, major: classification!, cursorId, year, semester })
      }
      // 학수번호로 검색, category는 무조건 All Class
      return getByCourseCode({ courseCode: queryKeyword, cursorId, year, semester })
    },
    getNextPageParam: lastPage => {
      return lastPage?.nextCursorId === null ? undefined : lastPage?.nextCursorId
    },
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
    retry: false,
  })
}

export interface CourseSearchPropsV2 {
  queryKeyword: string
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  classification: string | null
  year: string
  semester: SemesterType
}
export const useCourseSearchV2 = ({ category, queryKeyword, semester, year, classification }: CourseSearchPropsV2) => {
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
          return getInAcademicFoundation({ college: classification!, cursorId, year, semester })
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
