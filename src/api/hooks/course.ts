import {
  GetAcademicFoundationRequest,
  GetByKeywordInAcademicFoundationRequest,
  GetByKeywordInMajorRequest,
  GetByKeywordRequest,
  GetCourseRequest,
  GetCourseResponse,
  GetMajorRequest,
} from '@/api/types/course'
import { apiInterface } from '@/util/axios/custom-axios'

export const getAcademicFoundation = async (params: GetAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/academic-foundation', { params })
  return response.data
}

export const getGeneral = async (params: GetCourseRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/general', { params })
  return response.data
}

export const getMajor = async (params: GetMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/major', { params })
  return response.data
}

export const getByKeyword = async (params: GetByKeywordRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-all', { params })
  return response.data
}

export const getByKeywordInMajor = async (params: GetByKeywordInMajorRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-major', { params })
  return response.data
}

export const getByKeywordInGeneral = async (params: GetByKeywordRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-general', { params })
  return response.data
}

export const getByKeywordInAcademicFoundation = async (params: GetByKeywordInAcademicFoundationRequest) => {
  const response = await apiInterface.get<GetCourseResponse>('/course/search-academic-foundation', {
    params,
  })
  return response.data
}
