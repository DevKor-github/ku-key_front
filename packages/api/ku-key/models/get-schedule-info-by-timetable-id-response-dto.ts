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
 * @interface GetScheduleInfoByTimetableIdResponseDto
 */
export interface GetScheduleInfoByTimetableIdResponseDto {
  /**
   * 일정 ID
   * @type {number}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  scheduleId: number
  /**
   * 일정 이름
   * @type {string}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  scheduleTitle: string
  /**
   * 일정 시작 시간
   * @type {string}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  scheduleStartTime: string
  /**
   * 일정 종료 시간
   * @type {string}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  scheduleEndTime: string
  /**
   * 일정 장소
   * @type {string}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  location: string
  /**
   * 일정 요일
   * @type {string}
   * @memberof GetScheduleInfoByTimetableIdResponseDto
   */
  scheduleDay: string
}
