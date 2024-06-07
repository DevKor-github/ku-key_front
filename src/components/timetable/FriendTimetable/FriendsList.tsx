import { css } from '@styled-stytem/css'

import { GetFriendListResponse } from '@/api/types/friends'

interface FriendsListProps {
  data: GetFriendListResponse | undefined
}

const FriendsList = ({ data }: FriendsListProps) => {
  return (
    <div className={css({ w: 47, display: 'flex', flexDir: 'column', gap: 3.5 })}>
      <button
        className={css({
          h: 12,
          bgColor: 'lightGray.2',
          rounded: 10,
          border: '1px {colors.darkGray.1} solid',
          textAlign: 'center',
          color: 'darkGray.1',
          fontSize: 15,
          fontWeight: '500',
          wordWrap: 'break-word',
          cursor: 'pointer',
        })}
      >
        + Plus friend
      </button>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 0.5,
          bgColor: 'lightGray.2',
          rounded: 10,
          border: '1px {colors.darkGray.1} solid',
        })}
      >
        {data && data.length > 0 ? (
          data.map(friend => {
            return (
              <button key={friend.userId} className={css({ h: 11, cursor: 'pointer' })}>
                {friend.name}
              </button>
            )
          })
        ) : (
          <div className={css({ h: 11 })}>친구가 없어요 ㅠ</div>
        )}
      </div>
    </div>
  )
}

export default FriendsList
