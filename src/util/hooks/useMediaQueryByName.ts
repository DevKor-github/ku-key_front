import { useState } from 'react'

import { useIsomorphicLayoutEffect } from '@/util/hooks/useIsomorphicLayoutEffect'
import { UseMediaQueryOptions } from '@/util/hooks/useMediaQuery'

const IS_SERVER = typeof window === 'undefined'

const QUERY_MAP = {
  xsDown: '(max-width: 390px)',
  smDown: '(max-width: 580px)',
  mdDown: '(max-width: 900px)',
  lgDown: '(max-width: 1200px)',
} as const

export const useMediaQueryByName = (
  queryName: keyof typeof QUERY_MAP,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
) => {
  const query = QUERY_MAP[queryName]
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
