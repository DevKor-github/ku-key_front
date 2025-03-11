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
 * @interface GetCourseInfoByTimetableIdResponseDto
 */
export interface GetCourseInfoByTimetableIdResponseDto {
  /**
   * 강의 ID
   * @type {number}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  courseId: number
  /**
   * 교수님 성함
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  professorName: string
  /**
   * 강의명
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  courseName: string
  /**
   * 학수 번호
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  courseCode: string
  /**
   * 강의 계획서
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  syllabus: string
  /**
   * 시작 시간
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  startTime: string
  /**
   * 종료 시간
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  endTime: string
  /**
   * 강의실
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  classroom: string
  /**
   * 요일
   * @type {string}
   * @memberof GetCourseInfoByTimetableIdResponseDto
   */
  day: string
}
