import { css } from '@styled-stytem/css'
import { Search } from 'lucide-react'
import { CSSProperties, useState } from 'react'

interface SearchBoxProps {
  placeholder: string
  onSubmit: (queryKeyword: string) => void
  cssProps?: CSSProperties
}
const SearchBox = ({ placeholder, onSubmit, cssProps = {} }: SearchBoxProps) => {
  const [inputKeyword, setInputKeyword] = useState('')

  return (
    <form
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgColor: 'bg.gray',
        rounded: 10,
        border: '1px {colors.lightGray.1} solid',
        px: 5,
        py: 3,
      })}
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
          color: 'black.2',
          fontSize: 18,
          fontWeight: 500,
          flexGrow: 1,
          _placeholder: {
            color: 'lightGray.1',
          },
        })}
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
