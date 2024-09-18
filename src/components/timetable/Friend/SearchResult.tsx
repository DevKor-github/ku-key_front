import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { memo } from 'react'

import { GetSearchUserResponse } from '@/api/types/friends'
import FriendCard from '@/components/timetable/Friend/FriendCard'

interface SearchResultProps {
  data: GetSearchUserResponse | undefined
  error: Error | null
}

const SearchResult = memo(({ data, error }: SearchResultProps) => {
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
      {isAxiosError(error) && error.response?.data.message === '올바르지 않은 상대입니다.' && (
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
          No search results
        </div>
      )}
      {data && <FriendCard type="search" data={data} />}
    </div>
  )
})

export default SearchResult
