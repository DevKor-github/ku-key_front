import { throttle } from 'es-toolkit'
import { ReactNode, useCallback } from 'react'

import * as s from './style.css'

import { LoadingSpinner } from '@/components/ui/spinner'
import useIntersect from '@/util/hooks/useIntersect'

type Props<T> = {
  items: T[]
  render: (item: T, index: number) => ReactNode
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  fetchNextPage: () => void
} & Omit<React.HTMLProps<HTMLUListElement>, 'children'>

const Pagination = <T,>({ items, render, hasNextPage, isFetchingNextPage, fetchNextPage, ...props }: Props<T>) => {
  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetchingNextPage) throttle(() => fetchNextPage(), 200)()
  })

  const Loader = useCallback(() => {
    if (!hasNextPage) return null

    if (isFetchingNextPage)
      return (
        <div className={s.LoadingWrapper}>
          <LoadingSpinner />
        </div>
      )

    return <div className={s.Trigger} ref={fetchNextRef} />
  }, [hasNextPage, isFetchingNextPage, fetchNextRef])

  return (
    <>
      <ul {...props}>{items.map((item, index) => render(item, index))}</ul>
      <Loader />
    </>
  )
}

export default Pagination
