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
 * @interface NoticeDto
 */
export interface NoticeDto {
  /**
   * 알림 고유 ID
   * @type {number}
   * @memberof NoticeDto
   */
  id: number
  /**
   * 알림 내용
   * @type {string}
   * @memberof NoticeDto
   */
  content: string
  /**
   * 알림 시간
   * @type {string}
   * @memberof NoticeDto
   */
  createdAt: string
  /**
   * 새로운 알림인지 여부
   * @type {boolean}
   * @memberof NoticeDto
   */
  isNew: boolean
  /**
   * 알림 종류
   * @type {string}
   * @memberof NoticeDto
   */
  type: NoticeDtoType
  /**
   * 연결 핸들러
   * @type {number}
   * @memberof NoticeDto
   */
  handler: number
}

/**
 * @export
 * @enum {string}
 */
export type NoticeDtoType = 'ban' | 'friendRequest' | 'friendAccept' | 'commentOnPost' | 'commentOnComment' | 'hotPost'
