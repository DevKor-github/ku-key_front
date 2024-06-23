import { css, cva } from '@styled-stytem/css'
import { CircleX, Dot } from 'lucide-react'

import { useAddFriend, useDeleteFriendshipRequest, useReceiveFriendship } from '@/api/hooks/friends'

const buttonStyle = cva({
  base: {
    bgColor: 'darkGray.1',
    fontWeight: 700,
    fontSize: 12,
    color: 'white',
    px: 2.5,
    py: 1,
    rounded: 'full',
    cursor: 'pointer',
  },
  variants: {
    isRequest: {
      true: {
        bgColor: 'red.2',
      },
    },
  },
})

interface FriendCardProp {
  data: {
    name: string
    username: string
    major: string
    language: string
    friendshipId?: number
    userId?: number
  }
}

const FriendCard = ({ data }: FriendCardProp) => {
  const { mutate: addFriend } = useAddFriend()
  const { mutate: receiveFriendship } = useReceiveFriendship()
  const { mutate: deleteFriendship } = useDeleteFriendshipRequest()
  const isRequest = data.friendshipId !== undefined
  return (
    <div
      className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' })}
    >
      {isRequest && (
        <button
          className={css({
            cursor: 'pointer',
            position: 'absolute',
            right: 0,
            top: -1,
            p: 1,
            display: 'flex',
            color: 'darkGray.1',
          })}
          onClick={() => {
            deleteFriendship({ friendshipId: data.friendshipId! })
          }}
        >
          <CircleX size={16} />
        </button>
      )}
      <div className={css({ display: 'flex', gap: 5 })}>
        <img
          className={css({ h: 17, w: 17, rounded: 10 })}
          src="https://previews.123rf.com/images/avs1/avs12006/avs1200600713/149429617-%ED%88%AC%EB%AA%85-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%88%AC%EB%AA%85-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg"
          alt="profile"
        />
        <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
          <div className={css({ fontWeight: 600, fontSize: 16 })}>{data.username}</div>
          <div
            className={css({
              display: 'flex',
              fontSize: 14,
              fontWeight: 500,
              alignItems: 'center',
              color: 'darkGray.1',
            })}
          >
            <div>Korea UNIV</div>
            <Dot />
            <div>{data.major ? data.major : 'Major'}</div>
          </div>
          <div className={css({ fontWeight: 400, fontSize: 12, color: 'darkGray.2' })}>
            Language | {data.language ? data.language : 'Language'}
          </div>
        </div>
      </div>
      <button
        className={buttonStyle({ isRequest })}
        onClick={() => {
          if (isRequest) {
            receiveFriendship({ friendshipId: data.friendshipId! })
          } else {
            addFriend({ toUsername: data.username })
          }
        }}
      >
        {isRequest ? 'Friend accept' : 'Add friend'}
      </button>
    </div>
  )
}

export default FriendCard
