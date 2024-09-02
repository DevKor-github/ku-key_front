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
export const getByCourseCode = async ({ courseCode, cursorId }: GetByCourseCodeRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-course-code', {
    params: {
      courseCode,
      cursorId,
    },
  })
  return response.data
}
/**
 * 전공 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInMajor = async ({ courseName, major, cursorId }: GetByCourseNameInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-course-name', {
    params: { courseName, major, cursorId },
  })
  return response.data
}
/**d
 * 교양 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInGeneral = async ({ courseName, cursorId }: GetByCourseNameInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-course-name', {
    params: { courseName, cursorId },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInMajor = async ({ professorName, major, cursorId }: GetByProfInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-professor-name', {
    params: { professorName, major, cursorId },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInGeneral = async ({ professorName, cursorId }: GetByProfInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-professor-name', {
    params: { professorName, cursorId },
  })
  return response.data
}
/**
 * 해당 단과대의 모든 학문의 기초 강의를 조회합니다.
 */
export const getInAcademicFoundation = async ({ college, cursorId }: GetInAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/academic-foundation', {
    params: { college, cursorId },
  })
  return response.data
}

export const getGeneral = async ({ cursorId }: Pick<GetByCourseNameInGeneralRequest, 'cursorId'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/general', {
    params: { cursorId },
  })
  return response.data
}

export const getMajor = async ({ major, cursorId }: Omit<GetByCourseNameInMajorRequest, 'courseName'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/major', {
    params: { major, cursorId },
  })
  return response.data
}
