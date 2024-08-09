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
export const getByCourseCode = async ({ courseCode }: GetByCourseCodeRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-course-code', {
    params: {
      courseCode,
    },
  })
  return response.data
}
/**
 * 전공 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInMajor = async ({ courseName, major }: GetByCourseNameInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-course-name', {
    params: { courseName, major },
  })
  return response.data
}
/**d
 * 교양 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInGeneral = async ({ courseName }: GetByCourseNameInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-course-name', {
    params: { courseName },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInMajor = async ({ professorName, major }: GetByProfInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-professor-name', {
    params: { professorName, major },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInGeneral = async ({ professorName }: GetByProfInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-professor-name', {
    params: { professorName },
  })
  return response.data
}
/**
 * 해당 단과대의 모든 학문의 기초 강의를 조회합니다.
 */
export const getInAcademicFoundation = async ({ college }: GetInAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/academic-foundation', {
    params: { college },
  })
  return response.data
}
