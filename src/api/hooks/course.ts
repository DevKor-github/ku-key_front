import axios from 'axios'

import {
  GetByCourseCodeRequest,
  GetByCourseNameInGeneralRequest,
  GetByCourseNameInMajorRequest,
  GetByProfInGeneralRequest,
  GetByProfInMajorRequest,
  GetCourseResponse,
  GetInAcademicFoundationRequest,
} from '@/api/types/course'

/**
 * 학수번호를 입력하여 강의를 검색합니다.
 */
export const getByCourseCode = async ({ authHeader, courseCode }: GetByCourseCodeRequest) => {
  const response = await axios.get<GetCourseResponse>(`${import.meta.env.VITE_API_URL}/course/search-course-code`, {
    headers: { Authorization: authHeader },
    params: {
      courseCode,
    },
  })
  return response.data
}
/**
 * 전공 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInMajor = async ({ authHeader, courseName, major }: GetByCourseNameInMajorRequest) => {
  const response = await axios.get<GetCourseResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-major-course-name`,
    { headers: { Authorization: authHeader }, params: { courseName, major } },
  )
  return response.data
}
/**
 * 교양 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInGeneral = async ({ authHeader, courseName }: GetByCourseNameInGeneralRequest) => {
  const response = await axios.get<GetCourseResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-general-course-name`,
    { headers: { Authorization: authHeader }, params: { courseName } },
  )
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInMajor = async ({ authHeader, professorName, major }: GetByProfInMajorRequest) => {
  const response = await axios.get<GetCourseResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-major-professor-name`,
    { headers: { Authorization: authHeader }, params: { professorName, major } },
  )
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInGeneral = async ({ authHeader, professorName }: GetByProfInGeneralRequest) => {
  const response = await axios.get<GetCourseResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-general-professor-name`,
    { headers: { Authorization: authHeader }, params: { professorName } },
  )
  return response.data
}
/**
 * 해당 단과대의 모든 학문의 기초 강의를 조회합니다.
 */
export const getInAcademicFoundation = async ({ authHeader, college }: GetInAcademicFoundationRequest) => {
  const response = await axios.get<GetCourseResponse>(`${import.meta.env.VITE_API_URL}/course/academic-foundation`, {
    headers: { Authorization: authHeader },
    params: { college },
  })
  return response.data
}
