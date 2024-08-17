import { css, cva } from '@styled-stytem/css'
import { Search, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

interface SearchAreaProps {
  onSubmit: (inputKeyword: string) => void
}
const SearchArea = ({ onSubmit }: SearchAreaProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [focus, setFocus] = useState(false)
  const [keyword, setKeyword] = useState('')

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onSubmit(keyword)
    },
    [keyword, onSubmit],
  )

  const handleClearSearchBox = useCallback(() => {
    setKeyword('')
    inputRef.current?.focus()
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className={cva({
        base: {
          position: 'relative',
          width: '608px',
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
