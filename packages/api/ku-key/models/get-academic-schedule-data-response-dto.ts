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

import { AcademicSchedule } from './academic-schedule'

/**
 *
 * @export
 * @interface GetAcademicScheduleDataResponseDto
 */
export interface GetAcademicScheduleDataResponseDto {
  /**
   * 월
   * @type {number}
   * @memberof GetAcademicScheduleDataResponseDto
   */
  month: number
  /**
   * 월별 Academic Schedule 행사/일정
   * @type {Array<AcademicSchedule>}
   * @memberof GetAcademicScheduleDataResponseDto
   */
  schedules: Array<AcademicSchedule>
}
