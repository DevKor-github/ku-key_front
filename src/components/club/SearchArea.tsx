import { css, cva } from '@styled-system/css'
import { Search, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useSearch } from '@/util/hooks/useSearch'

interface SearchAreaProps {
  onSubmit: (inputKeyword: string) => void
  clearKeywordParam: () => void
}
const SearchArea = ({ onSubmit, clearKeywordParam }: SearchAreaProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)
  const [keyword, setKeyword] = useState('')

  const { searchParam } = useSearch()

  useEffect(() => {
    // parameter에 키워드가 있다면 이걸로 탐색
    const prevVal = searchParam.get('keyword')
    if (prevVal) {
      setKeyword(prevVal)
    }
  }, [searchParam])

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onSubmit(keyword)
    },
    [keyword, onSubmit],
  )

  const handleClearSearchBox = useCallback(() => {
    setKeyword('')
    clearKeywordParam()
    inputRef.current?.focus()
  }, [clearKeywordParam])

  return (
    <form
      onSubmit={handleSubmit}
      className={cva({
        base: {
          position: 'relative',
          width: { base: '450px', smDown: 'full' },
          h: 12,
          display: 'flex',
          alignItems: 'center',
          borderColor: 'lightGray.1',
          border: '1px solid',
          rounded: 'full',
          fontSize: 18,
        },
        variants: {
          focus: {
            true: {
              borderColor: 'black.2',
            },
          },
        },
      })({ focus })}
    >
      <span
        className={cva({
          base: {
            position: 'absolute',
            left: 5,
            zIndex: 0,
            visibility: 'hidden',
            color: 'darkGray.2',
            display: 'flex',
            gap: 2.5,
            alignItems: 'center',
          },
          variants: {
            isVisible: {
              true: {
                visibility: 'visible',
              },
            },
          },
        })({ isVisible: keyword === '' })}
      >
        <Search size={24} />
        search
      </span>
      <input
        type="text"
        ref={inputRef}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={css({ zIndex: 1, pl: 5, w: 'full', h: 'full', outline: 'none', border: 'none' })}
      />
      <button
        type="button"
        onClick={handleClearSearchBox}
        className={cva({
          base: {
            position: 'absolute',
            right: 5,
            zIndex: 2,
            visibility: 'hidden',
            color: 'black.1',
            cursor: 'pointer',
          },
          variants: {
            isVisible: {
              true: {
                visibility: 'visible',
              },
            },
          },
        })({ isVisible: keyword !== '' })}
      >
        <X />
      </button>
    </form>
  )
}

export default SearchArea
