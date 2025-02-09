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
import { DeleteFriendshipResponseDto } from '../models'
// @ts-ignore
import { GetFriendResponseDto } from '../models'
// @ts-ignore
import { GetReceivedFriendshipRequestCountDto } from '../models'
// @ts-ignore
import { GetTimetableByTimetableIdDto } from '../models'
// @ts-ignore
import { GetWaitingFriendResponseDto } from '../models'
// @ts-ignore
import { SearchUserResponseDto } from '../models'
// @ts-ignore
import { SendFriendshipRequestDto } from '../models'
// @ts-ignore
import { SendFriendshipResponseDto } from '../models'
// @ts-ignore
import { UpdateFriendshipResponseDto } from '../models'
/**
 * FriendshipApi - axios parameter creator
 * @export
 */
/**
 * 친구 ID, 연도, 학기를 입력받아 해당 학기에 친구의 대표 시간표를 조회합니다.
 * @summary 친구 시간표 조회
 * @param {string} username 친구 추가용 ID (username)
 * @param {string} year 연도
 * @param {string} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipFriendTimetableGetAxiosParamCreator = async (
  username: string,
  year: string,
  semester: string,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/friend-timetable`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any
  if (username !== undefined) {
    localVarQueryParameter['username'] = username
  }

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
 * 이미 친구로 등록된 유저에 대해, friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 친구 삭제하기
 * @param {number} friendshipId 해당 친구 관계에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipFriendshipIdDeleteAxiosParamCreator = async (
  friendshipId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/{friendshipId}`.replace(
    `{${'friendshipId'}}`,
    encodeURIComponent(String(friendshipId)),
  )
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
 * 전체 친구 목록을 조회하거나, keyword를 query로 받아 친구 목록을 필터링하여 조회합니다.
 * @summary 친구 목록 조회
 * @param {string} [keyword] 검색 키워드
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipGetAxiosParamCreator = async (
  keyword?: string,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any
  if (keyword !== undefined) {
    localVarQueryParameter['keyword'] = keyword
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
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 * @summary 친구 요청 보내기
 * @param {SendFriendshipRequestDto} sendFriendshipRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipPostAxiosParamCreator = async (
  sendFriendshipRequestDto: SendFriendshipRequestDto,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship`
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
  localVarRequestOptions.data = sendFriendshipRequestDto || undefined

  return {
    url: toPathString(localVarUrlObj),
    options: localVarRequestOptions,
  }
}
/**
 * 나에게 온 친구 요청 전체 개수 / 아직 확인하지 않은 개수를 조회합니다.
 * @summary 나에게 온 친구 요청 개수 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedCountGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/received/count`
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
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 받은 친구 요청 거절하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedFriendshipIdDeleteAxiosParamCreator = async (
  friendshipId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/received/{friendshipId}`.replace(
    `{${'friendshipId'}}`,
    encodeURIComponent(String(friendshipId)),
  )
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
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 * @summary 받은 친구 요청 수락하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedFriendshipIdPatchAxiosParamCreator = async (
  friendshipId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/received/{friendshipId}`.replace(
    `{${'friendshipId'}}`,
    encodeURIComponent(String(friendshipId)),
  )
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options }
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
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 나에게 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/received`
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
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다. 검색 결과가 없는 경우 null을 반환합니다.
 * @summary 친구 추가를 위한 유저 검색
 * @param {any} username 친구 추가용 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSearchUserGetAxiosParamCreator = async (
  username: any,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/search-user`
  // use dummy base URL string because the URL constructor only accepts absolute URLs.
  const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
  let baseOptions
  if (configuration) {
    baseOptions = configuration.baseOptions
  }

  const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
  const localVarHeaderParameter = {} as any
  const localVarQueryParameter = {} as any
  if (username !== undefined) {
    localVarQueryParameter['username'] = username
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
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 보낸 친구 요청 취소하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSentFriendshipIdDeleteAxiosParamCreator = async (
  friendshipId: number,
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/sent/{friendshipId}`.replace(
    `{${'friendshipId'}}`,
    encodeURIComponent(String(friendshipId)),
  )
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
 * 내가 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 내가 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSentGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/friendship/sent`
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
 * FriendshipApi - functional programming interface
 * @export
 */
/**
 * 친구 ID, 연도, 학기를 입력받아 해당 학기에 친구의 대표 시간표를 조회합니다.
 * @summary 친구 시간표 조회
 * @param {string} username 친구 추가용 ID (username)
 * @param {string} year 연도
 * @param {string} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipFriendTimetableGetFp = async (
  username: string,
  year: string,
  semester: string,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetTimetableByTimetableIdDto>>> => {
  const localVarAxiosArgs = await friendshipFriendTimetableGetAxiosParamCreator(
    username,
    year,
    semester,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 이미 친구로 등록된 유저에 대해, friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 친구 삭제하기
 * @param {number} friendshipId 해당 친구 관계에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipFriendshipIdDeleteFp = async (
  friendshipId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteFriendshipResponseDto>> => {
  const localVarAxiosArgs = await friendshipFriendshipIdDeleteAxiosParamCreator(friendshipId, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 전체 친구 목록을 조회하거나, keyword를 query로 받아 친구 목록을 필터링하여 조회합니다.
 * @summary 친구 목록 조회
 * @param {string} [keyword] 검색 키워드
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipGetFp = async (
  keyword?: string,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetFriendResponseDto>>> => {
  const localVarAxiosArgs = await friendshipGetAxiosParamCreator(keyword, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 * @summary 친구 요청 보내기
 * @param {SendFriendshipRequestDto} sendFriendshipRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipPostFp = async (
  sendFriendshipRequestDto: SendFriendshipRequestDto,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendFriendshipResponseDto>> => {
  const localVarAxiosArgs = await friendshipPostAxiosParamCreator(sendFriendshipRequestDto, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 나에게 온 친구 요청 전체 개수 / 아직 확인하지 않은 개수를 조회합니다.
 * @summary 나에게 온 친구 요청 개수 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedCountGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetReceivedFriendshipRequestCountDto>> => {
  const localVarAxiosArgs = await friendshipReceivedCountGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 받은 친구 요청 거절하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedFriendshipIdDeleteFp = async (
  friendshipId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteFriendshipResponseDto>> => {
  const localVarAxiosArgs = await friendshipReceivedFriendshipIdDeleteAxiosParamCreator(
    friendshipId,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 * @summary 받은 친구 요청 수락하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedFriendshipIdPatchFp = async (
  friendshipId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateFriendshipResponseDto>> => {
  const localVarAxiosArgs = await friendshipReceivedFriendshipIdPatchAxiosParamCreator(
    friendshipId,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 나에게 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipReceivedGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetWaitingFriendResponseDto>>> => {
  const localVarAxiosArgs = await friendshipReceivedGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다. 검색 결과가 없는 경우 null을 반환합니다.
 * @summary 친구 추가를 위한 유저 검색
 * @param {any} username 친구 추가용 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSearchUserGetFp = async (
  username: any,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchUserResponseDto>> => {
  const localVarAxiosArgs = await friendshipSearchUserGetAxiosParamCreator(username, options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 보낸 친구 요청 취소하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSentFriendshipIdDeleteFp = async (
  friendshipId: number,
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteFriendshipResponseDto>> => {
  const localVarAxiosArgs = await friendshipSentFriendshipIdDeleteAxiosParamCreator(
    friendshipId,
    options,
    configuration,
  )
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}
/**
 * 내가 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 내가 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const friendshipSentGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetWaitingFriendResponseDto>>> => {
  const localVarAxiosArgs = await friendshipSentGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}

/**
 * FriendshipApi - factory interface
 * @export
 */

export type FriendshipFriendTimetableGetRequestParams = {
  username: string
  year: string
  semester: string
  options?: any
}

/**
 * 친구 ID, 연도, 학기를 입력받아 해당 학기에 친구의 대표 시간표를 조회합니다.
 * @summary 친구 시간표 조회
 * @param {string} username 친구 추가용 ID (username)
 * @param {string} year 연도
 * @param {string} semester 학기
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipFriendTimetableGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipFriendTimetableGetRequestParams): AxiosPromise<Array<GetTimetableByTimetableIdDto>> => {
    return friendshipFriendTimetableGetFp(
      params.username,
      params.year,
      params.semester,
      params.options,
      configuration,
    ).then(request => request(axios, basePath))
  }
}

export type FriendshipFriendshipIdDeleteRequestParams = {
  friendshipId: number
  options?: any
}

/**
 * 이미 친구로 등록된 유저에 대해, friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 친구 삭제하기
 * @param {number} friendshipId 해당 친구 관계에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipFriendshipIdDelete = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipFriendshipIdDeleteRequestParams): AxiosPromise<DeleteFriendshipResponseDto> => {
    return friendshipFriendshipIdDeleteFp(params.friendshipId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipGetRequestParams = {
  keyword?: string
  options?: any
}

/**
 * 전체 친구 목록을 조회하거나, keyword를 query로 받아 친구 목록을 필터링하여 조회합니다.
 * @summary 친구 목록 조회
 * @param {string} [keyword] 검색 키워드
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipGetRequestParams): AxiosPromise<Array<GetFriendResponseDto>> => {
    return friendshipGetFp(params.keyword, params.options, configuration).then(request => request(axios, basePath))
  }
}

export type FriendshipPostRequestParams = {
  sendFriendshipRequestDto: SendFriendshipRequestDto
  options?: any
}

/**
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 * @summary 친구 요청 보내기
 * @param {SendFriendshipRequestDto} sendFriendshipRequestDto
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipPost = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipPostRequestParams): AxiosPromise<SendFriendshipResponseDto> => {
    return friendshipPostFp(params.sendFriendshipRequestDto, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipReceivedCountGetRequestParams = {
  options?: any
}

/**
 * 나에게 온 친구 요청 전체 개수 / 아직 확인하지 않은 개수를 조회합니다.
 * @summary 나에게 온 친구 요청 개수 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipReceivedCountGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<GetReceivedFriendshipRequestCountDto> => {
    return friendshipReceivedCountGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}

export type FriendshipReceivedFriendshipIdDeleteRequestParams = {
  friendshipId: number
  options?: any
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 받은 친구 요청 거절하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipReceivedFriendshipIdDelete = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipReceivedFriendshipIdDeleteRequestParams): AxiosPromise<DeleteFriendshipResponseDto> => {
    return friendshipReceivedFriendshipIdDeleteFp(params.friendshipId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipReceivedFriendshipIdPatchRequestParams = {
  friendshipId: number
  options?: any
}

/**
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 * @summary 받은 친구 요청 수락하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipReceivedFriendshipIdPatch = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipReceivedFriendshipIdPatchRequestParams): AxiosPromise<UpdateFriendshipResponseDto> => {
    return friendshipReceivedFriendshipIdPatchFp(params.friendshipId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipReceivedGetRequestParams = {
  options?: any
}

/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 나에게 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipReceivedGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<Array<GetWaitingFriendResponseDto>> => {
    return friendshipReceivedGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}

export type FriendshipSearchUserGetRequestParams = {
  username: any
  options?: any
}

/**
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다. 검색 결과가 없는 경우 null을 반환합니다.
 * @summary 친구 추가를 위한 유저 검색
 * @param {any} username 친구 추가용 id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipSearchUserGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipSearchUserGetRequestParams): AxiosPromise<SearchUserResponseDto> => {
    return friendshipSearchUserGetFp(params.username, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipSentFriendshipIdDeleteRequestParams = {
  friendshipId: number
  options?: any
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 * @summary 보낸 친구 요청 취소하기
 * @param {number} friendshipId 해당 친구 요청에 대한 friendship id
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipSentFriendshipIdDelete = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params: FriendshipSentFriendshipIdDeleteRequestParams): AxiosPromise<DeleteFriendshipResponseDto> => {
    return friendshipSentFriendshipIdDeleteFp(params.friendshipId, params.options, configuration).then(request =>
      request(axios, basePath),
    )
  }
}

export type FriendshipSentGetRequestParams = {
  options?: any
}

/**
 * 내가 친구 요청을 보낸 유저 목록을 조회합니다.
 * @summary 내가 친구 요청을 보낸 유저 목록 조회
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const friendshipSentGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<Array<GetWaitingFriendResponseDto>> => {
    return friendshipSentGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}
