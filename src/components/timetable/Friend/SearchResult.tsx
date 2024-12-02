import { css } from '@styled-system/css'
import { memo, useMemo } from 'react'

import { useGetSearchUser } from '@/api/hooks/friends'
import FriendCard from '@/components/timetable/Friend/FriendCard'
import { SearchFriend } from '@/components/timetable/Friend/FriendsManage'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const SearchResult = memo(() => {
  const [queryParam] = useQueryParams<SearchFriend>()

  const { data: searchResultData } = useGetSearchUser({ username: queryParam?.username ?? '' })

  const resultText = useMemo(() => {
    if (queryParam.username === undefined) return `Enter your friend's username to search`
    else if (searchResultData === '') return 'No search results'
  }, [queryParam.username, searchResultData])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 5,
        borderTop: 'solid 1px {colors.lightGray.1}',
        py: 5,
      })}
    >
      <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Search results</h2>
      <div
        className={css({
          fontWeight: 600,
          fontSize: 16,
          color: 'lightGray.1',
          display: 'flex',
          justifyContent: 'center',
          pt: 5,
        })}
      >
        {resultText}
      </div>
      {searchResultData && <FriendCard type="search" data={searchResultData} />}
    </div>
  )
})

export default SearchResult
