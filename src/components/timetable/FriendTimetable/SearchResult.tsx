import { css } from '@styled-stytem/css'
import { memo } from 'react'

import { GetSearchUserResponse } from '@/api/types/friends'
import FriendCard from '@/components/timetable/FriendTimetable/FriendCard'

interface SearchResultProps {
  data: GetSearchUserResponse | undefined
}

const SearchResult = memo(({ data }: SearchResultProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 5,
        borderTop: 'solid 1px {colors.lightGray.1}',
        pt: 5,
      })}
    >
      <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Search results</h2>
      {data && <FriendCard data={data} />}
    </div>
  )
})

export default SearchResult
