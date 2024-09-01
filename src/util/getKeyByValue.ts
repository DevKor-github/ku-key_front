const getKeyByValue = (obj: { [key in string]: string }, value: string) => {
  const keyArr = Object.keys(obj) as Array<keyof typeof obj>
  return keyArr.find(key => obj[key] === value)
}

export default getKeyByValue
