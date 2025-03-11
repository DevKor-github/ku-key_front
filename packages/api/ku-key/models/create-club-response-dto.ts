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
 * @interface CreateClubResponseDto
 */
export interface CreateClubResponseDto {
  /**
   * club table의 PK
   * @type {number}
   * @memberof CreateClubResponseDto
   */
  clubId: number
  /**
   * 동아리명
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  name: string
  /**
   * 동아리 요약
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  summary: string
  /**
   * 정기 모임
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  regularMeeting: string
  /**
   * 모집 기간
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  recruitmentPeriod: string
  /**
   * 동아리 설명
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  description: string
  /**
   * 동아리 사진 URL
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  imageUrl: string
  /**
   * 인스타그램 링크
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  instagramLink?: string
  /**
   * 유튜브 링크
   * @type {string}
   * @memberof CreateClubResponseDto
   */
  youtubeLink?: string
}
