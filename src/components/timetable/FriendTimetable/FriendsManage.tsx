import { css } from '@styled-stytem/css'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { getSearchUser } from '@/api/hooks/friends'
import FriendRequest from '@/components/timetable/FriendTimetable/FriendRequest'
import SearchResult from '@/components/timetable/FriendTimetable/SearchResult'
import { Input } from '@/components/ui/input'

const FriendsManage = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const authHeader = useAuthHeader()
  const { data: searchResultData, refetch: search } = useQuery({
    queryKey: ['searchResult', searchKeyword],
    queryFn: () => getSearchUser({ authHeader, username: searchKeyword }),
    enabled: false,
  })
  useEffect(() => {
    console.log(searchResultData)
  }, [searchResultData])
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
        className={css({
          display: 'flex',
          alignItems: 'center',
          bgColor: 'lightGray.2',
          rounded: 10,
          px: 5,
          py: 3,
          border: '1px solid {colors.darkGray.2}',
          color: 'black.2',
        })}
        onSubmit={e => {
          e.preventDefault()
          search()
          setSearchKeyword('')
        }}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            pr: 1,
            borderRight: 'solid {colors.black.2} 1px',
            h: 5,
            fontSize: 18,
          })}
        >
          Name
        </div>
        <Input
          onChange={e => {
            setSearchKeyword(e.target.value)
          }}
          className={css({ bgColor: 'transparent', border: 'none', outline: 'none', h: 5, fontSize: 18 })}
          value={searchKeyword}
        />
      </form>
      <FriendRequest />
      <SearchResult />
    </div>
  )
}

export default FriendsManage
