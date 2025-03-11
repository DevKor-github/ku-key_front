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

import { CursorPageMetaResponseDto } from './cursor-page-meta-response-dto'
import { NoticeDto } from './notice-dto'

/**
 *
 * @export
 * @interface GetNoticeResponseDto
 */
export interface GetNoticeResponseDto {
  /**
   * 페이징 관련 메타데이터
   * @type {CursorPageMetaResponseDto}
   * @memberof GetNoticeResponseDto
   */
  meta: CursorPageMetaResponseDto
  /**
   * 알림 목록
   * @type {Array<NoticeDto>}
   * @memberof GetNoticeResponseDto
   */
  data: Array<NoticeDto>
}
