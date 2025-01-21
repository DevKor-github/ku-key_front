/**
 * Object를 순회할 수 있도록
 * Object를 받아 Key의 배열을 반환합니다.
 *
 * Object.keys()와 다르게 타입 추론이 가능합니다.
 */
const getKeys = <T extends object>(obj: T): Array<keyof T> => Object.keys(obj) as Array<keyof T>

export default getKeys
