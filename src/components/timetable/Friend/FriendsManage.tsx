import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { useState } from 'react'

import { useGetSearchUser } from '@/api/hooks/friends'
import FriendRequest from '@/components/timetable/Friend/FriendRequest'
import SearchResult from '@/components/timetable/Friend/SearchResult'
import { Input } from '@/components/ui/input'

const FriendsManage = () => {
  const [inputKeyword, setInputKeyword] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')

  const { data: searchResultData, error } = useGetSearchUser({ username: searchKeyword })

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
      <form
        onSubmit={e => {
          e.preventDefault()
          setSearchKeyword(inputKeyword)
          setInputKeyword('')
        }}
      >
        <Input
          onChange={e => {
            setInputKeyword(e.target.value)
          }}
          className={css({
            display: 'flex',
            alignItems: 'center',
            bgColor: 'lightGray.2',
            outline: 'none',
            rounded: 10,
            px: 5,
            py: 3,
            h: 13,
            fontSize: 18,
            border: '1px solid {colors.darkGray.2}',
            color: 'black.2',
            _placeholder: {
              color: 'lightGray.1',
            },
          })}
          placeholder="Friend ID"
          value={inputKeyword}
        />
      </form>
      <FriendRequest />
      <SearchResult data={searchResultData} error={error} />
    </div>
  )
}

export default FriendsManage
