import { css } from '@styled-stytem/css'
import { useState } from 'react'

import { useGetSearchUser } from '@/api/hooks/friends'
import FriendRequest from '@/components/timetable/FriendTimetable/FriendRequest'
import SearchResult from '@/components/timetable/FriendTimetable/SearchResult'
import { Input } from '@/components/ui/input'

const FriendsManage = () => {
  const [inputKeyword, setInputKeyword] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')

  const { data: searchResultData } = useGetSearchUser({ username: searchKeyword })

  return (
    <div
      className={css({
        w: '100%',
        rounded: 10,
        p: 5,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDir: 'column',
        gap: 10,
      })}
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
          })}
          value={inputKeyword}
        />
      </form>
      <FriendRequest />
      <SearchResult data={searchResultData} />
    </div>
  )
}

export default FriendsManage
