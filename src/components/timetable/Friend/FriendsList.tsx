import { css, cva } from '@styled-system/css'
import { CircleX } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDeleteFriendship, useGetFriendList } from '@/api/hooks/friends'
import { FriendInterface } from '@/types/friends'

export const FriendPageBtnStyle = cva({
  base: {
    w: { base: 47, mdDown: 'full' },
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
    gap: 2,
    transition: 'border 0.256s, color 0.256s, background 0.256s',
    _hover: {
      borderColor: 'darkGray.2',
      color: 'darkGray.2',
    },
  },
  variants: {
    isEditMode: {
      true: {
        bgColor: 'red.1',
        borderColor: 'red.1',
        color: 'bg.gray',
        _hover: {
          borderColor: 'red.1',
          color: 'bg.gray',
        },
      },
    },
    prev: {
      true: {
        rounded: 'full',
      },
    },
  },
})

const FriendListStyle = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: 2.5,
    rounded: 10,
    border: '1px {colors.lightGray.1} solid',
    w: '100%',
    alignItems: 'center',
    py: 2.5,
    transition: 'border 0.256s, background 0.256s',
  },
  variants: {
    isEditMode: {
      true: {
        borderColor: 'red.1',
        bgColor: 'bg.red.2',
      },
    },
  },
})

const FriendBlock = cva({
  base: {
    h: 11,
    w: 42,
    cursor: 'pointer',
    color: 'lightGray.1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1.5,
    fontSize: 18,
    fontWeight: 500,
    rounded: 10,
    transition: 'color 0.256s background 0.256s',
    '& span': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    _hover: {
      bgColor: 'bg.gray',
    },
  },
  variants: {
    isEditMode: {
      true: {
        color: 'red.1',
        _hover: {
          bgColor: 'bg.red.1',
        },
      },
    },
  },
})

const FriendsList = () => {
  const { data } = useGetFriendList({ keyword: null })
  const [isEditMode, setIsEditMode] = useState(false)
  const { mutate: deleteFriend } = useDeleteFriendship()

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, friend: FriendInterface) => {
      if (isEditMode) {
        event.preventDefault()
        if (
          confirm(`Are you sure?\nThis action will remove ${friend.username} from your friends list!\nDo you agree?`)
        ) {
          deleteFriend({ friendshipId: friend.friendshipId })
        }
      }
    },
    [isEditMode, deleteFriend],
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 3.5, alignItems: 'center' })}>
      <button className={FriendPageBtnStyle({ isEditMode })} onClick={() => setIsEditMode(prev => !prev)}>
        {isEditMode ? 'Complete' : 'Edit friend list'}
      </button>
      <div className={FriendListStyle({ isEditMode })}>
        {data.length > 0 ? (
          data.map(friend => {
            return (
              <Link
                key={friend.userId}
                className={FriendBlock({ isEditMode })}
                to={`/timetable/friend/${friend.username}`}
                onClick={event => handleClick(event, friend)}
              >
                <span>{friend.username}</span>
                {isEditMode && <CircleX size={16} />}
              </Link>
            )
          })
        ) : (
          <div className={css(FriendBlock.raw({ isEditMode }), { cursor: 'default' })}>Hi there!</div>
        )}
      </div>
    </div>
  )
}

export default FriendsList
