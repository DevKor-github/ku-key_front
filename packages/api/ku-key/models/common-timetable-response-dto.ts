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
 * @interface CommonTimetableResponseDto
 */
export interface CommonTimetableResponseDto {
  /**
   * ID
   * @type {number}
   * @memberof CommonTimetableResponseDto
   */
  id: number
  /**
   * 유저 ID
   * @type {number}
   * @memberof CommonTimetableResponseDto
   */
  userId: number
  /**
   * 시간표 이름
   * @type {string}
   * @memberof CommonTimetableResponseDto
   */
  timetableName: string
  /**
   * 학기
   * @type {string}
   * @memberof CommonTimetableResponseDto
   */
  semester: string
  /**
   * 연도
   * @type {string}
   * @memberof CommonTimetableResponseDto
   */
  year: string
  /**
   * 대표 시간표 여부
   * @type {boolean}
   * @memberof CommonTimetableResponseDto
   */
  mainTimetable: boolean
  /**
   * 시간표 색상
   * @type {string}
   * @memberof CommonTimetableResponseDto
   */
  color: string
}
