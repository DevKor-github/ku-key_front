import { css } from '@styled-stytem/css'

import { useGetFriendList } from '@/api/hooks/friends'

const PlusFriend = css({
  w: '100%',
  bgColor: 'bg.gray',
  py: 3.5,
  rounded: 10,
  border: '1px {colors.lightGray.1} solid',
  color: 'lightGray.1',
  fontSize: 18,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'border 0.256s, color 0.256s',
  _hover: {
    borderColor: 'darkGray.2',
    color: 'darkGray.2',
  },
})

const FriendBlock = css({
  h: 11,
  w: 42,
  cursor: 'pointer',
  color: 'lightGray.1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 500,
  rounded: 10,
})

const FriendsList = () => {
  const { data } = useGetFriendList({ keyword: null })

  return (
    <div className={css({ w: 47, display: 'flex', flexDir: 'column', gap: 3.5, alignItems: 'center' })}>
      <button className={PlusFriend}>Add friends</button>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 2.5,
          rounded: 10,
          border: '1px {colors.lightGray.1} solid',
          w: '100%',
          alignItems: 'center',
          py: 2.5,
        })}
      >
        {data && data.length > 0 ? (
          data.map(friend => {
            return (
              <button key={friend.userId} className={FriendBlock}>
                {friend.username}
              </button>
            )
          })
        ) : (
          <div className={FriendBlock}>I'M ASSA</div>
        )}
      </div>
    </div>
  )
}

export default FriendsList
