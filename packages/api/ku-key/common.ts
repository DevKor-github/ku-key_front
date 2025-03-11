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

import { Configuration } from './configuration'
import { RequiredError, RequestArgs } from './base'
import { AxiosInstance, AxiosResponse } from 'axios'

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
  if (paramValue === null || paramValue === undefined) {
    throw new RequiredError(
      paramName,
      `Required parameter ${paramName} was null or undefined when calling ${functionName}.`,
    )
  }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
  const searchParams = new URLSearchParams(url.search)
  for (const object of objects) {
    for (const key in object) {
      if (Array.isArray(object[key])) {
        searchParams.delete(key)
        for (const item of object[key]) {
          searchParams.append(key, item)
        }
      } else {
        searchParams.set(key, object[key])
      }
    }
  }
  url.search = searchParams.toString()
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
  const nonString = typeof value !== 'string'
  /* const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString; */
  // In JP BANK, serialization is off.
  const needsSerialization = false
  return needsSerialization ? JSON.stringify(value !== undefined ? value : {}) : value || ''
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
  return url.pathname + url.search + url.hash
}

/**
 *
 * @export
 */
export const createRequestFunction = function (
  axiosArgs: RequestArgs,
  globalAxios: AxiosInstance,
  configuration?: Configuration,
) {
  return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios) => {
    const axiosRequestArgs = { ...axiosArgs.options, url: axiosArgs.url }
    return axios.request<T, R>(axiosRequestArgs)
  }
}
