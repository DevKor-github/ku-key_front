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
 * @interface GetCoursesWithCourseReviewsResponseDto
 */
export interface GetCoursesWithCourseReviewsResponseDto {
  /**
   * 강의 ID
   * @type {number}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  id: number
  /**
   * 교수명
   * @type {string}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  professorName: string
  /**
   * 강의 이름
   * @type {string}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  courseName: string
  /**
   * 강의평점
   * @type {number}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  totalRate: number
  /**
   * 연도
   * @type {string}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  year: string
  /**
   * 학기
   * @type {string}
   * @memberof GetCoursesWithCourseReviewsResponseDto
   */
  semester: string
}
