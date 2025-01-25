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
 * @interface Character
 */
export interface Character {
  /**
   * 캐릭터 종류
   * @type {string}
   * @memberof Character
   */
  type: CharacterType
  /**
   * 캐릭터 레벨
   * @type {number}
   * @memberof Character
   */
  level: number
}

/**
 * @export
 * @enum {string}
 */
export type CharacterType =
  | 'character1'
  | 'character2'
  | 'character3'
  | 'character4'
  | 'character5'
  | 'anonymous'
  | 'deleted'
