import { css } from '@styled-stytem/css'

interface UpperCaseHighlightOption {
  color?: string
}
const upperCaseHighlight = (str: string, options?: UpperCaseHighlightOption) => {
  const color = options?.color ?? 'red.1'

  return str.split('').map(char => {
    return char === char.toUpperCase() && char.match(/[A-Z]/) ? <span className={css({ color })}>{char}</span> : char
  })
}

export default upperCaseHighlight
