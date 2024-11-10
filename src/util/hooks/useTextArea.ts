import { useCallback, useState } from 'react'

export const useTextArea = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value), [])
  const clear = useCallback(() => setValue(''), [])
  return { value, onChange, clear }
}
