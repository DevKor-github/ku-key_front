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
 * @interface MyComment
 */
export interface MyComment {
  /**
   * 댓글 고유 ID
   * @type {number}
   * @memberof MyComment
   */
  id: number
  /**
   * 댓글 생성 시간
   * @type {string}
   * @memberof MyComment
   */
  createdAt: string
  /**
   * 댓글 수정 시간
   * @type {string}
   * @memberof MyComment
   */
  updatedAt: string
  /**
   * 댓글 내용
   * @type {string}
   * @memberof MyComment
   */
  content: string
  /**
   * 좋아요 수
   * @type {number}
   * @memberof MyComment
   */
  likeCount: number
  /**
   * 댓글을 작성한 게시글 Id
   * @type {number}
   * @memberof MyComment
   */
  postId: number
  /**
   * 답글 수
   * @type {number}
   * @memberof MyComment
   */
  replyCount: number
  /**
   * 익명 설정 여부
   * @type {boolean}
   * @memberof MyComment
   */
  isAnonymous: boolean
}
