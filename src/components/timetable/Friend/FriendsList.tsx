import { css, cva } from '@styled-stytem/css'
import { CircleX } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDeleteFriendship, useGetFriendList } from '@/api/hooks/friends'

export const FriendPageBtnStyle = cva({
  base: {
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
        bgColor: 'bg.red',
      },
    },
  },
})

const FriendBlock = cva({
  base: {
    h: 11,
    w: 30,
    cursor: 'pointer',
    color: 'lightGray.1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1.5,
    fontSize: 18,
    fontWeight: 500,
    rounded: 10,
    transition: 'color 0.256s',
    '& span': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
  variants: {
    isEditMode: {
      true: {
        color: 'red.1',
      },
    },
  },
})

const FriendsList = () => {
  const { data } = useGetFriendList({ keyword: null })
  const [isEditMode, setIsEditMode] = useState(false)
  const { mutate: deleteFriend } = useDeleteFriendship()

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
                onClick={e => {
                  if (isEditMode) {
                    e.preventDefault()
                    if (
                      confirm(
                        `Are you sure?\nThis action will remove ${friend.username} from your friends list!\nDo you agree?`,
                      )
                    ) {
                      deleteFriend({ friendshipId: friend.friendshipId })
                    }
                  }
                }}
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