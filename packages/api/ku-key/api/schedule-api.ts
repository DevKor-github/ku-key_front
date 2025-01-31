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
import { CreateScheduleRequestDto } from '../models'
// @ts-ignore
import { CreateScheduleResponseDto } from '../models'
// @ts-ignore
import { DeleteScheduleResponseDto } from '../models'
// @ts-ignore
import { UpdateScheduleRequestDto } from '../models'
// @ts-ignore
import { UpdateScheduleResponseDto } from '../models'
/**
 * ScheduleApi - axios parameter creator
 * @export
 */
/**
 * 시간표에 개인 스케쥴을 추가합니다. 해당 시간에 이미 등록된 개인 스케쥴이나 강의가 있을 경우 추가되지 않습니다.
 * @summary 시간표에 개인 스케쥴 추가
 * @param {CreateScheduleRequestDto} createScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const schedulePostAxiosParamCreator = async (
  createScheduleRequestDto: CreateScheduleRequestDto,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/schedule`
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
  localVarRequestOptions.data = createScheduleRequestDto || undefined

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * 시간표에 등록된 개인 스케쥴을 삭제합니다.
 * @summary 시간표에 개인 스케쥴 삭제
 * @param {number} scheduleId 삭제할 스케쥴 ID
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const scheduleScheduleIdDeleteAxiosParamCreator = async (
  scheduleId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/schedule/{scheduleId}`.replace(`{${'scheduleId'}}`, encodeURIComponent(String(scheduleId)))
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
 * 시간표에 등록된 개인 스케쥴을 수정합니다.
 * @summary 시간표에 개인 스케쥴 수정
 * @param {number} scheduleId 수정할 스케쥴 ID
 * @param {UpdateScheduleRequestDto} updateScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const scheduleScheduleIdPatchAxiosParamCreator = async (
  scheduleId: number,
  updateScheduleRequestDto: UpdateScheduleRequestDto,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/schedule/{scheduleId}`.replace(`{${'scheduleId'}}`, encodeURIComponent(String(scheduleId)))
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
  localVarRequestOptions.data = updateScheduleRequestDto || undefined

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}

/**
 * ScheduleApi - functional programming interface
 * @export
 */
/**
 * 시간표에 개인 스케쥴을 추가합니다. 해당 시간에 이미 등록된 개인 스케쥴이나 강의가 있을 경우 추가되지 않습니다.
 * @summary 시간표에 개인 스케쥴 추가
 * @param {CreateScheduleRequestDto} createScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const schedulePostFp = async (
  createScheduleRequestDto: CreateScheduleRequestDto,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateScheduleResponseDto>> => {
  const localVarAxiosArgs = await schedulePostAxiosParamCreator(createScheduleRequestDto, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 시간표에 등록된 개인 스케쥴을 삭제합니다.
 * @summary 시간표에 개인 스케쥴 삭제
 * @param {number} scheduleId 삭제할 스케쥴 ID
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const scheduleScheduleIdDeleteFp = async (
  scheduleId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteScheduleResponseDto>> => {
  const localVarAxiosArgs = await scheduleScheduleIdDeleteAxiosParamCreator(scheduleId, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 시간표에 등록된 개인 스케쥴을 수정합니다.
 * @summary 시간표에 개인 스케쥴 수정
 * @param {number} scheduleId 수정할 스케쥴 ID
 * @param {UpdateScheduleRequestDto} updateScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const scheduleScheduleIdPatchFp = async (
  scheduleId: number,
  updateScheduleRequestDto: UpdateScheduleRequestDto,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateScheduleResponseDto>> => {
  const localVarAxiosArgs = await scheduleScheduleIdPatchAxiosParamCreator(
    scheduleId,
    updateScheduleRequestDto,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}

/**
 * ScheduleApi - factory interface
 * @export
 */

export type SchedulePostRequestParams = {
  createScheduleRequestDto: CreateScheduleRequestDto
  options?: any
}

/**
 * 시간표에 개인 스케쥴을 추가합니다. 해당 시간에 이미 등록된 개인 스케쥴이나 강의가 있을 경우 추가되지 않습니다.
 * @summary 시간표에 개인 스케쥴 추가
 * @param {CreateScheduleRequestDto} createScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const schedulePost = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: SchedulePostRequestParams): AxiosPromise<CreateScheduleResponseDto> => {
    return schedulePostFp(params.createScheduleRequestDto, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type ScheduleScheduleIdDeleteRequestParams = {
  scheduleId: number
  options?: any
}

/**
 * 시간표에 등록된 개인 스케쥴을 삭제합니다.
 * @summary 시간표에 개인 스케쥴 삭제
 * @param {number} scheduleId 삭제할 스케쥴 ID
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const scheduleScheduleIdDelete = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: ScheduleScheduleIdDeleteRequestParams): AxiosPromise<DeleteScheduleResponseDto> => {
    return scheduleScheduleIdDeleteFp(params.scheduleId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type ScheduleScheduleIdPatchRequestParams = {
  scheduleId: number
  updateScheduleRequestDto: UpdateScheduleRequestDto
  options?: any
}

/**
 * 시간표에 등록된 개인 스케쥴을 수정합니다.
 * @summary 시간표에 개인 스케쥴 수정
 * @param {number} scheduleId 수정할 스케쥴 ID
 * @param {UpdateScheduleRequestDto} updateScheduleRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const scheduleScheduleIdPatch = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: ScheduleScheduleIdPatchRequestParams): AxiosPromise<UpdateScheduleResponseDto> => {
    return scheduleScheduleIdPatchFp(
      params.scheduleId,
      params.updateScheduleRequestDto,
      params.options,
      configuration,
    ).then(request => request(axios, basePath))
  }
}
