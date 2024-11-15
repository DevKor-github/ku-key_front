import { css } from '@styled-system/css'

interface UpperCaseHighlightOption {
  color?: string
}
const upperCaseHighlight = (str: string, options?: UpperCaseHighlightOption) => {
  const color = options?.color ?? 'red.1'

  return str.split('').map((char, ind) => {
    return char === char.toUpperCase() && char.match(/[A-Z]/) ? (
      <span key={`${str}-${char}-${ind}`} className={css({ color })}>
        {char}
      </span>
    ) : (
      char
    )
  })
}

export default upperCaseHighlight
