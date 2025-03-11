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

import { Character } from './character'

/**
 *
 * @export
 * @interface SearchUserResponseDto
 */
export interface SearchUserResponseDto {
  /**
   * 본명
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  name: string
  /**
   * 친구 추가용 id
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  username: string
  /**
   * 출신 학교
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  homeUniversity: string
  /**
   * 전공
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  major: string
  /**
   * 출신 나라
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  country: string
  /**
   * 유저 상태 (본인 / 친구 / 상대방의 수락 대기 중 / 나의 수락 보류 중 / 그 외)
   * @type {string}
   * @memberof SearchUserResponseDto
   */
  status: SearchUserResponseDtoStatus
  /**
   * 유저 캐릭터
   * @type {Character}
   * @memberof SearchUserResponseDto
   */
  character: Character
}

/**
 * @export
 * @enum {string}
 */
export type SearchUserResponseDtoStatus = 'me' | 'friend' | 'requested' | 'pending' | 'unknown'
