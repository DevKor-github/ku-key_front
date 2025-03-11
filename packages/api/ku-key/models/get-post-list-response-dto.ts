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
import { PostPreviewWithBoardName } from './post-preview-with-board-name'

/**
 *
 * @export
 * @interface GetPostListResponseDto
 */
export interface GetPostListResponseDto {
  /**
   * 페이징 관련 메타데이터
   * @type {CursorPageMetaResponseDto}
   * @memberof GetPostListResponseDto
   */
  meta: CursorPageMetaResponseDto
  /**
   * 게시글 목록
   * @type {Array<PostPreviewWithBoardName>}
   * @memberof GetPostListResponseDto
   */
  data: Array<PostPreviewWithBoardName>
}
