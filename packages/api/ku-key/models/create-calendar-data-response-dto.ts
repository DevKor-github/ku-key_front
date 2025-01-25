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
 * @interface CreateCalendarDataResponseDto
 */
export interface CreateCalendarDataResponseDto {
  /**
   * 행사/일정 id
   * @type {number}
   * @memberof CreateCalendarDataResponseDto
   */
  id: number
  /**
   * 시작 날짜 (AAAA-BB-CC 형식)
   * @type {string}
   * @memberof CreateCalendarDataResponseDto
   */
  startDate: string
  /**
   * 종료 날짜 (AAAA-BB-CC 형식)
   * @type {string}
   * @memberof CreateCalendarDataResponseDto
   */
  endDate: string
  /**
   * 행사/일정 제목
   * @type {string}
   * @memberof CreateCalendarDataResponseDto
   */
  title: string
  /**
   * 행사/일정 설명
   * @type {string}
   * @memberof CreateCalendarDataResponseDto
   */
  description: string
  /**
   * 학사 일정 여부
   * @type {boolean}
   * @memberof CreateCalendarDataResponseDto
   */
  isAcademic: boolean
}
