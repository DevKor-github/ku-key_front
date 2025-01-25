/* tslint:disable */
/* eslint-disable */
/**
 * KU-KEY API
 * API for KU-KEY service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'

// @ts-ignore
import { CreateCalendarDataRequestDto } from '../models'
// @ts-ignore
import { CreateCalendarDataResponseDto } from '../models'
// @ts-ignore
import { DeleteCalendarDataResponseDto } from '../models'
// @ts-ignore
import { GetAcademicScheduleDataResponseDto } from '../models'
// @ts-ignore
import { GetBannerImageUrlResponseDto } from '../models'
// @ts-ignore
import { GetDailyCalendarDataResponseDto } from '../models'
// @ts-ignore
import { UpdateCalendarDataRequestDto } from '../models'
// @ts-ignore
import { UpdateCalendarDataResponseDto } from '../models'
/**
 * CalendarApi - axios parameter creator
 * @export
 */
/**
 * 연도, 학기 정보를 받아 Academic Schedule에 해당하는 행사/일정을 조회합니다. 행사/일정이 존재하는 날짜의 경우에만 가져옵니다.
 * @summary Academic Schedule 행사/일정 조회
 * @param {number} year 연도
 * @param {number} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarAcademicGetAxiosParamCreator = async (
  year: number,
  semester: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar/academic`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any
  if (year !== undefined) {
    localVarQueryParameter['year'] = year
  }

  if (semester !== undefined) {
    localVarQueryParameter['semester'] = semester
  }

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * S3에 저장된 메인 홈 배너 이미지 URL 목록을 조회합니다.
 * @summary 메인 홈 배너 이미지 URL 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarBannerImageUrlsGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar/banner-image-urls`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 삭제합니다.
 * @summary 특정 행사/일정 삭제
 * @param {number} calendarId 행사/일정 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarCalendarIdDeleteAxiosParamCreator = async (
  calendarId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar/{calendarId}`.replace(`{${'calendarId'}}`, encodeURIComponent(String(calendarId)))
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 수정합니다.
 * @summary 특정 행사/일정 수정
 * @param {number} calendarId 행사/일정 id
 * @param {UpdateCalendarDataRequestDto} updateCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarCalendarIdPatchAxiosParamCreator = async (
  calendarId: number,
  updateCalendarDataRequestDto: UpdateCalendarDataRequestDto,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar/{calendarId}`.replace(`{${'calendarId'}}`, encodeURIComponent(String(calendarId)))
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any

  localVarHeaderParameter['Content-Type'] = 'application/json'

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
  localVarRequestOptions.data = updateCalendarDataRequestDto || undefined

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * 연도, 월 정보를 받아 그 달의 행사/일정을 조회합니다. 행사/일정 존재여부에 상관없이 그 달의 모든 날짜를 반환합니다.
 * @summary 연도, 월별 행사/일정 조회
 * @param {number} year 연도
 * @param {number} month 월
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarGetAxiosParamCreator = async (
  year: number,
  month: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any
  if (year !== undefined) {
    localVarQueryParameter['year'] = year
  }

  if (month !== undefined) {
    localVarQueryParameter['month'] = month
  }

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * admin page에서 특정 날짜의 행사/일정을 생성합니다.
 * @summary 특정 날짜 행사/일정 생성
 * @param {CreateCalendarDataRequestDto} createCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarPostAxiosParamCreator = async (
  createCalendarDataRequestDto: CreateCalendarDataRequestDto,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/calendar`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any

  localVarHeaderParameter['Content-Type'] = 'application/json'

  setSearchParams(localVarUrlObj, localVarQueryParameter)
  let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
  localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
  localVarRequestOptions.data = createCalendarDataRequestDto || undefined

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}

/**
 * CalendarApi - functional programming interface
 * @export
 */
/**
 * 연도, 학기 정보를 받아 Academic Schedule에 해당하는 행사/일정을 조회합니다. 행사/일정이 존재하는 날짜의 경우에만 가져옵니다.
 * @summary Academic Schedule 행사/일정 조회
 * @param {number} year 연도
 * @param {number} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarAcademicGetFp = async (
  year: number,
  semester: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetAcademicScheduleDataResponseDto>>> => {
  const localVarAxiosArgs = await calendarAcademicGetAxiosParamCreator(year, semester, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * S3에 저장된 메인 홈 배너 이미지 URL 목록을 조회합니다.
 * @summary 메인 홈 배너 이미지 URL 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarBannerImageUrlsGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBannerImageUrlResponseDto>>> => {
  const localVarAxiosArgs = await calendarBannerImageUrlsGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 삭제합니다.
 * @summary 특정 행사/일정 삭제
 * @param {number} calendarId 행사/일정 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarCalendarIdDeleteFp = async (
  calendarId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteCalendarDataResponseDto>> => {
  const localVarAxiosArgs = await calendarCalendarIdDeleteAxiosParamCreator(calendarId, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 수정합니다.
 * @summary 특정 행사/일정 수정
 * @param {number} calendarId 행사/일정 id
 * @param {UpdateCalendarDataRequestDto} updateCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarCalendarIdPatchFp = async (
  calendarId: number,
  updateCalendarDataRequestDto: UpdateCalendarDataRequestDto,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateCalendarDataResponseDto>> => {
  const localVarAxiosArgs = await calendarCalendarIdPatchAxiosParamCreator(
    calendarId,
    updateCalendarDataRequestDto,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 연도, 월 정보를 받아 그 달의 행사/일정을 조회합니다. 행사/일정 존재여부에 상관없이 그 달의 모든 날짜를 반환합니다.
 * @summary 연도, 월별 행사/일정 조회
 * @param {number} year 연도
 * @param {number} month 월
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarGetFp = async (
  year: number,
  month: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetDailyCalendarDataResponseDto>>> => {
  const localVarAxiosArgs = await calendarGetAxiosParamCreator(year, month, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * admin page에서 특정 날짜의 행사/일정을 생성합니다.
 * @summary 특정 날짜 행사/일정 생성
 * @param {CreateCalendarDataRequestDto} createCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const calendarPostFp = async (
  createCalendarDataRequestDto: CreateCalendarDataRequestDto,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCalendarDataResponseDto>> => {
  const localVarAxiosArgs = await calendarPostAxiosParamCreator(createCalendarDataRequestDto, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}

/**
 * CalendarApi - factory interface
 * @export
 */

export type CalendarAcademicGetRequestParams = {
  year: number
  semester: number
  options?: any
}

/**
 * 연도, 학기 정보를 받아 Academic Schedule에 해당하는 행사/일정을 조회합니다. 행사/일정이 존재하는 날짜의 경우에만 가져옵니다.
 * @summary Academic Schedule 행사/일정 조회
 * @param {number} year 연도
 * @param {number} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarAcademicGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: CalendarAcademicGetRequestParams): AxiosPromise<Array<GetAcademicScheduleDataResponseDto>> => {
    return calendarAcademicGetFp(params.year, params.semester, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type CalendarBannerImageUrlsGetRequestParams = {
  options?: any
}

/**
 * S3에 저장된 메인 홈 배너 이미지 URL 목록을 조회합니다.
 * @summary 메인 홈 배너 이미지 URL 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarBannerImageUrlsGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<Array<GetBannerImageUrlResponseDto>> => {
    return calendarBannerImageUrlsGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}

export type CalendarCalendarIdDeleteRequestParams = {
  calendarId: number
  options?: any
}

/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 삭제합니다.
 * @summary 특정 행사/일정 삭제
 * @param {number} calendarId 행사/일정 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarCalendarIdDelete = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: CalendarCalendarIdDeleteRequestParams): AxiosPromise<DeleteCalendarDataResponseDto> => {
    return calendarCalendarIdDeleteFp(params.calendarId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type CalendarCalendarIdPatchRequestParams = {
  calendarId: number
  updateCalendarDataRequestDto: UpdateCalendarDataRequestDto
  options?: any
}

/**
 * 행사/일정 id를 받아 admin page에서 해당하는 행사/일정을 수정합니다.
 * @summary 특정 행사/일정 수정
 * @param {number} calendarId 행사/일정 id
 * @param {UpdateCalendarDataRequestDto} updateCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarCalendarIdPatch = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: CalendarCalendarIdPatchRequestParams): AxiosPromise<UpdateCalendarDataResponseDto> => {
    return calendarCalendarIdPatchFp(
      params.calendarId,
      params.updateCalendarDataRequestDto,
      params.options,
      configuration,
    ).then(request => request(axios, basePath))
  }
}

export type CalendarGetRequestParams = {
  year: number
  month: number
  options?: any
}

/**
 * 연도, 월 정보를 받아 그 달의 행사/일정을 조회합니다. 행사/일정 존재여부에 상관없이 그 달의 모든 날짜를 반환합니다.
 * @summary 연도, 월별 행사/일정 조회
 * @param {number} year 연도
 * @param {number} month 월
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: CalendarGetRequestParams): AxiosPromise<Array<GetDailyCalendarDataResponseDto>> => {
    return calendarGetFp(params.year, params.month, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type CalendarPostRequestParams = {
  createCalendarDataRequestDto: CreateCalendarDataRequestDto
  options?: any
}

/**
 * admin page에서 특정 날짜의 행사/일정을 생성합니다.
 * @summary 특정 날짜 행사/일정 생성
 * @param {CreateCalendarDataRequestDto} createCalendarDataRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const calendarPost = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: CalendarPostRequestParams): AxiosPromise<CreateCalendarDataResponseDto> => {
    return calendarPostFp(params.createCalendarDataRequestDto, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export const getcalendarAcademicGetPath = (year: number, semester: number) => {
  return `/calendar/academic`
}
export const getcalendarBannerImageUrlsGetPath = () => {
  return `/calendar/banner-image-urls`
}
export const getcalendarCalendarIdDeletePath = (calendarId: number) => {
  return `/calendar/{calendarId}`.replace(`{${'calendarId'}}`, encodeURIComponent(String(calendarId)))
}
export const getcalendarCalendarIdPatchPath = (
  calendarId: number,
  updateCalendarDataRequestDto: UpdateCalendarDataRequestDto,
) => {
  return `/calendar/{calendarId}`.replace(`{${'calendarId'}}`, encodeURIComponent(String(calendarId)))
}
export const getcalendarGetPath = (year: number, month: number) => {
  return `/calendar`
}
export const getcalendarPostPath = (createCalendarDataRequestDto: CreateCalendarDataRequestDto) => {
  return `/calendar`
}
