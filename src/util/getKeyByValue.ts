import getKeys from '@/util/getKeys'

const getKeyByValue = <T extends object>(obj: T, value: (typeof obj)[keyof typeof obj]) => {
  return getKeys(obj).find(key => obj[key] === value)
}

export default getKeyByValue
