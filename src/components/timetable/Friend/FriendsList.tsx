import { css } from '@styled-stytem/css'
import { Link } from 'react-router-dom'

import { useGetFriendList } from '@/api/hooks/friends'

const FriendBlock = css.raw({
  h: 11,
  w: 30,
  cursor: 'pointer',
  color: 'lightGray.1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 500,
  rounded: 10,
  '& span': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})
export const FriendPageBtnStyle = css({
  w: 47,
  bgColor: 'bg.gray',
  py: 3.5,
  rounded: 10,
  border: '1px {colors.lightGray.1} solid',
  color: 'lightGray.1',
  fontSize: 18,
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border 0.256s, color 0.256s',
  _hover: {
    borderColor: 'darkGray.2',
    color: 'darkGray.2',
  },
})

export const FriendPageBtn = () => {
  return <button className={FriendPageBtnStyle}>Edit friend list</button>
}

const FriendsList = () => {
  const { data } = useGetFriendList({ keyword: null })

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 3.5, alignItems: 'center' })}>
      <FriendPageBtn />
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
        {data.length > 0 ? (
          data.map(friend => {
            return (
              <Link key={friend.userId} className={css(FriendBlock)} to={`/timetable/friend/${friend.username}`}>
                <span>{friend.username}</span>
              </Link>
            )
          })
        ) : (
          <div className={css(FriendBlock, { cursor: 'default' })}>Hi there~!</div>
        )}
      </div>
    </div>
  )
}

export default FriendsList
