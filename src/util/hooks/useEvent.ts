import { useCallback, useLayoutEffect, useRef } from 'react'

export default function useEvent<A extends unknown[], B>(fn: (...args: A) => B) {
  const ref = useRef(fn)
  useLayoutEffect(() => void (ref.current = fn))
  return useCallback((...args: A) => ref.current(...args), [])
}
