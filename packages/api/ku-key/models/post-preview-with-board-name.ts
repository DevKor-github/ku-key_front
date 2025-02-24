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

import { CommunityUser } from './community-user'

/**
 *
 * @export
 * @interface PostPreviewWithBoardName
 */
export interface PostPreviewWithBoardName {
  /**
   * 게시글 고유 ID
   * @type {number}
   * @memberof PostPreviewWithBoardName
   */
  id: number
  /**
   * 게시글 제목
   * @type {string}
   * @memberof PostPreviewWithBoardName
   */
  title: string
  /**
   * 게시글 내용(100글자 까지)
   * @type {string}
   * @memberof PostPreviewWithBoardName
   */
  content: string
  /**
   * 게시글 생성 시간
   * @type {string}
   * @memberof PostPreviewWithBoardName
   */
  createdAt: string
  /**
   * 게시글을 생성한 사용자
   * @type {CommunityUser}
   * @memberof PostPreviewWithBoardName
   */
  user: CommunityUser
  /**
   * 댓글 수
   * @type {number}
   * @memberof PostPreviewWithBoardName
   */
  commentCount: number
  /**
   * 스크랩 수
   * @type {number}
   * @memberof PostPreviewWithBoardName
   */
  scrapCount: number
  /**
   * 스크랩 여부
   * @type {boolean}
   * @memberof PostPreviewWithBoardName
   */
  myScrap: boolean
  /**
   * 사진 미리보기(사진이 없으면 null)
   * @type {string}
   * @memberof PostPreviewWithBoardName
   */
  thumbnailDir: string
  /**
   * 반응 수
   * @type {number}
   * @memberof PostPreviewWithBoardName
   */
  reactionCount: number
  /**
   * 조회 수
   * @type {number}
   * @memberof PostPreviewWithBoardName
   */
  views: number
  /**
   * 게시판 이름
   * @type {string}
   * @memberof PostPreviewWithBoardName
   */
  boardName: string
}
