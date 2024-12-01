import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { Suspense, useCallback } from 'react'

import FriendRequest from '@/components/timetable/Friend/FriendRequest'
import SearchResult from '@/components/timetable/Friend/SearchResult'
import SearchBox from '@/components/timetable/SearchBox'
import { LoadingSpinner } from '@/components/ui/spinner/inde'
import { useQueryParams } from '@/util/hooks/useQueryParams'

export type SearchFriend = {
  username?: string
}
const FriendsManage = () => {
  const [, setQueryParam] = useQueryParams<SearchFriend>()

  const search = useCallback(
    (queryKeyword: string) => setQueryParam({ username: queryKeyword === '' ? undefined : queryKeyword }),
    [setQueryParam],
  )

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
      <Suspense fallback={<LoadingSpinner />}>
        <SearchResult />
      </Suspense>
    </div>
  )
}

export default FriendsManage
