import { css, cva } from '@styled-system/css'
import { Search } from 'lucide-react'
import { CSSProperties, useState } from 'react'

import { useDeepCompareEffect } from '@/util/hooks/useDeepCompare'

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
  initialKeyword?: string
  placeholder?: string
  onSubmit: (queryKeyword: string) => void
  cssProps?: CSSProperties
  // 배열 안에 담긴 값이 바뀌면 검색어를 초기화합니다
  // @default []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetKeys?: any[]
}

const SearchBox = ({ initialKeyword, placeholder, onSubmit, cssProps = {}, resetKeys = [] }: SearchBoxProps) => {
  const [inputKeyword, setInputKeyword] = useState(initialKeyword ?? '')
  const [isFocus, setIsFocus] = useState(false)

  useDeepCompareEffect(() => {
    setInputKeyword('')
  }, resetKeys)

  return (
    <form
      className={FormStyle({ isFocus })}
      style={cssProps}
      onSubmit={e => {
        e.preventDefault()
        onSubmit(inputKeyword)
      }}
    >
      <input
        className={css({
          border: 'none',
          outline: 'none',
          fontSize: 18,
          fontWeight: 500,
          flexGrow: 1,
          lineHeight: 1.2,
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
