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
export const getByCourseCode = async ({ courseCode, cursorId, year, semester }: GetByCourseCodeRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-course-code', {
    params: {
      courseCode,
      cursorId,
      year,
      semester,
    },
  })
  return response.data
}
/**
 * 전공 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInMajor = async ({
  courseName,
  major,
  cursorId,
  year,
  semester,
}: GetByCourseNameInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-course-name', {
    params: { courseName, major, cursorId, year, semester },
  })
  return response.data
}
/**d
 * 교양 과목명을 입력하여 강의를 검색합니다.
 */
export const getByCourseNameInGeneral = async ({
  courseName,
  cursorId,
  year,
  semester,
}: GetByCourseNameInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-course-name', {
    params: { courseName, cursorId, year, semester },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInMajor = async ({ professorName, major, cursorId, year, semester }: GetByProfInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major-professor-name', {
    params: { professorName, major, cursorId, year, semester },
  })
  return response.data
}
/**
 * 전공 과목 담당 교수님 성함을 입력하여 강의를 검색합니다.
 */
export const getByProfInGeneral = async ({ professorName, cursorId, year, semester }: GetByProfInGeneralRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general-professor-name', {
    params: { professorName, cursorId, year, semester },
  })
  return response.data
}
/**
 * 해당 단과대의 모든 학문의 기초 강의를 조회합니다.
 */
export const getInAcademicFoundation = async ({
  college,
  cursorId,
  year,
  semester,
}: GetInAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/academic-foundation', {
    params: { college, cursorId, year, semester },
  })
  return response.data
}

export const getGeneral = async ({ cursorId, year, semester }: Omit<GetByCourseNameInGeneralRequest, 'courseName'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/general', {
    params: { cursorId, year, semester },
  })
  return response.data
}

export const getMajor = async ({
  major,
  cursorId,
  year,
  semester,
}: Omit<GetByCourseNameInMajorRequest, 'courseName'>) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/major', {
    params: { major, cursorId, year, semester },
  })
  return response.data
}
