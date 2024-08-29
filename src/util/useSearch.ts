import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const handleSetParam = useCallback(
    (key: string, value: string) => {
      searchParam.set(key, value)
      setSearchParam(searchParam)
    },
    [searchParam, setSearchParam],
  )

  const deleteParam = useCallback(
    (key: string) => {
      searchParam.delete(key)
      setSearchParam(searchParam)
    },
    [searchParam, setSearchParam],
  )

  return { searchParam, handleSetParam, deleteParam }
}
