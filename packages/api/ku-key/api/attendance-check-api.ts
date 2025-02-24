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
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, toPathString, createRequestFunction } from '../common'
// @ts-ignore
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'

// @ts-ignore
import { TakeAttendanceResponseDto } from '../models'
/**
 * AttendanceCheckApi - axios parameter creator
 * @export
 */
/**
 * 오늘 출석을 이미 했는지 확인합니다.
 * @summary 오늘 출석 체크 여부 확인
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const attendanceCheckGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/attendance-check`
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
 * 이미 출석한 날에는 더 이상 출석할 수 없습니다.
 * @summary 출석 체크
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const attendanceCheckPostAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/attendance-check`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
 * AttendanceCheckApi - functional programming interface
 * @export
 */
/**
 * 오늘 출석을 이미 했는지 확인합니다.
 * @summary 오늘 출석 체크 여부 확인
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const attendanceCheckGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> => {
  const localVarAxiosArgs = await attendanceCheckGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 이미 출석한 날에는 더 이상 출석할 수 없습니다.
 * @summary 출석 체크
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const attendanceCheckPostFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TakeAttendanceResponseDto>> => {
  const localVarAxiosArgs = await attendanceCheckPostAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}

/**
 * AttendanceCheckApi - factory interface
 * @export
 */

export type AttendanceCheckGetRequestParams = {
  options?: any
}

/**
 * 오늘 출석을 이미 했는지 확인합니다.
 * @summary 오늘 출석 체크 여부 확인
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const attendanceCheckGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<boolean> => {
    return attendanceCheckGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}

export type AttendanceCheckPostRequestParams = {
  options?: any
}

/**
 * 이미 출석한 날에는 더 이상 출석할 수 없습니다.
 * @summary 출석 체크
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const attendanceCheckPost = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<TakeAttendanceResponseDto> => {
    return attendanceCheckPostFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}
