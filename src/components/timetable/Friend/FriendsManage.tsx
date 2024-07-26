import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useGetSearchUser } from '@/api/hooks/friends'
import FriendRequest from '@/components/timetable/Friend/FriendRequest'
import SearchResult from '@/components/timetable/Friend/SearchResult'
import SearchBox from '@/components/timetable/SearchBox'

const FriendsManage = () => {
  const isMounted = useRef(false)
  const [query, setQuery] = useState('')

  const { data: searchResultData, error, refetch } = useGetSearchUser({ username: query })

  useEffect(() => {
    if (isMounted.current) {
      refetch()
    } else {
      isMounted.current = true
    }
  }, [query, refetch])

  const search = useCallback((queryKeyword: string) => {
    setQuery(queryKeyword)
  }, [])

  return (
    <div
      className={cx(
        css({
          w: '100%',
          rounded: 10,
          p: 5,
          display: 'flex',
          flexDir: 'column',
          gap: 10,
        }),
        shadow(),
      )}
    >
      <SearchBox
        onSubmit={search}
        placeholder="Friend ID"
        cssProps={{
          backgroundColor: '#F4F4F4',
          borderColor: '#ACACAC',
        }}
      />
      <FriendRequest />
      <SearchResult data={searchResultData} error={error} />
    </div>
  )
}

export default FriendsManage
