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

/**
 * DefaultApi - axios parameter creator
 * @export
 */
/**
 *
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const rootGetAxiosParamCreator = async (
  options: AxiosRequestConfig = {},
  configuration?: Configuration,
): Promise<RequestArgs> => {
  const localVarPath = `/`
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
 * DefaultApi - functional programming interface
 * @export
 */
/**
 *
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
const rootGetFp = async (
  options?: AxiosRequestConfig,
  configuration?: Configuration,
): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> => {
  const localVarAxiosArgs = await rootGetAxiosParamCreator(options, configuration)
  return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
}

/**
 * DefaultApi - factory interface
 * @export
 */

export type RootGetRequestParams = {
  options?: any
}

/**
 *
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
export const rootGet = ({
  configuration,
  basePath,
  axios,
}: {
  configuration?: Configuration
  basePath?: string
  axios?: AxiosInstance
}) => {
  return (params?: { options?: any }): AxiosPromise<void> => {
    return rootGetFp(params?.options, configuration).then(request => request(axios, basePath))
  }
}
