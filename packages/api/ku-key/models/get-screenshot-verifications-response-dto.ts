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

/**
 *
 * @export
 * @interface GetScreenshotVerificationsResponseDto
 */
export interface GetScreenshotVerificationsResponseDto {
  /**
   * 인증요청 고유 Id
   * @type {number}
   * @memberof GetScreenshotVerificationsResponseDto
   */
  id: number
  /**
   * 교환학생 합격 스크린샷 이미지 url
   * @type {string}
   * @memberof GetScreenshotVerificationsResponseDto
   */
  imgDir: string
  /**
   * 인증 요청한 학번
   * @type {number}
   * @memberof GetScreenshotVerificationsResponseDto
   */
  studentNumber: number
  /**
   * 요청한 날짜 및 시간
   * @type {string}
   * @memberof GetScreenshotVerificationsResponseDto
   */
  lastUpdated: string
}
