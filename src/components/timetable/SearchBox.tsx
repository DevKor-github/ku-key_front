import { css, cva } from '@styled-stytem/css'
import { Search } from 'lucide-react'
import { CSSProperties, useState } from 'react'

const FormStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bgColor: 'bg.gray',
    rounded: 10,
    border: '1px {colors.lightGray.1} solid',
    px: 5,
    py: 3,
    color: 'lightGray.1',
    transition: 'all 0.256s',
  },
  variants: {
    isFocus: {
      true: {
        borderColor: 'darkGray.2',
        color: 'black.2',
      },
    },
  },
})

interface SearchBoxProps {
  placeholder: string
  onSubmit: (queryKeyword: string) => void
  cssProps?: CSSProperties
}

const SearchBox = ({ placeholder, onSubmit, cssProps = {} }: SearchBoxProps) => {
  const [inputKeyword, setInputKeyword] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  return (
    <form
      className={FormStyle({ isFocus })}
      style={cssProps}
      onSubmit={e => {
        e.preventDefault()
        onSubmit(inputKeyword)
        setInputKeyword('')
      }}
    >
      <input
        className={css({
          border: 'none',
          outline: 'none',
          fontSize: 18,
          fontWeight: 500,
          flexGrow: 1,
          color: 'black.2',
          _placeholder: {
            color: 'lightGray.1',
          },
        })}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={e => setInputKeyword(e.target.value)}
        value={inputKeyword}
        placeholder={placeholder}
      />
      <button type="submit" className={css({ cursor: 'pointer' })}>
        <Search />
      </button>
    </form>
  )
}

export default SearchBox
