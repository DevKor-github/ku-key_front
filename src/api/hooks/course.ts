import {
  GetByCourseCodeRequest,
  GetByCourseNameInGeneralRequest,
  GetByCourseNameInMajorRequest,
  GetByProfInGeneralRequest,
  GetByProfInMajorRequest,
  GetCourseResponse,
  GetInAcademicFoundationRequest,
} from '@/api/types/course'
import { apiInterface } from '@/util/axios/custom-axios'

/**
 * 학수번호를 입력하여 강의를 검색합니다.
 */
export const getByCourseCode = async (params: GetByCourseCodeRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-course-code', { params })
  return response.data
}
/**
 * 전공 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInMajor = async (params: GetByCourseNameInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-course-name', { params })
  return response.data
}
/**d
 * 교양 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInGeneral = async (params: GetByCourseNameInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-course-name', { params })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInMajor = async (params: GetByProfInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-professor-name', { params })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInGeneral = async (params: GetByProfInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-professor-name', { params })
  return response.data
}
/**
 * 해당 단과대의 모든 학문의 기초 강의를 조회합니다.
 */
export const getInAcademicFoundation = async (params: GetInAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/academic-foundation', { params })
  return response.data
}

export const getGeneral = async (params: Omit<GetByCourseNameInGeneralRequest, 'courseName'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/general', { params })
  return response.data
}

export const getMajor = async (params: Omit<GetByCourseNameInMajorRequest, 'courseName'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/major', { params })
  return response.data
}
