import { css, cva } from '@styled-stytem/css'
import { findByAlpha2 } from 'iso-3166-1-ts'
import { CircleX, Dot } from 'lucide-react'
import { useCallback } from 'react'

import {
  useAddFriendship,
  useDeleteFriendshipRequest,
  useDeleteSentRequest,
  useReceiveFriendship,
} from '@/api/hooks/friends'
import Profile from '@/components/ui/profile'
import { CharacterType } from '@/types/community'
import { friendStatusType } from '@/types/friends'

const buttonStyle = cva({
  base: {
    fontWeight: 700,
    fontSize: 12,
    color: 'white',
    px: 2.5,
    py: 1,
    rounded: 'full',
    transition: 'all 0.256s',
  },
  variants: {
    active: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'auto',
      },
    },
    color: {
      red1: {
        bgColor: 'red.2',
        _hover: {
          bgColor: 'red.3',
        },
      },
      red2: {
        bgColor: 'red.3',
        _hover: {
          bgColor: 'red.4',
        },
      },
      gray: {
        bgColor: 'darkGray.1',
      },
    },
  },
})

interface FriendCardProp {
  type: 'requested' | 'recieved' | 'search'
  data: {
    name: string
    username: string
    major: string
    country: string
    friendshipId?: number
    homeUniversity: string
    userId?: number
    status?: friendStatusType
    character: {
      type: CharacterType
      level: number | null
    }
  }
}

const FriendCardBtn = ({ type, data }: FriendCardProp) => {
  const { mutate: addFriend } = useAddFriendship()
  const { mutate: receiveFriendship } = useReceiveFriendship()
  const { mutate: deleteSentRequest } = useDeleteSentRequest()

  let isActive = false
  let color: 'gray' | 'red1' | 'red2' | undefined = 'gray'
  let btnText = ''

  if (type === 'search') {
    switch (data.status) {
      case 'friend':
        btnText = 'friend'
        break
      case 'me':
        btnText = "It's me"
        break
      case 'pending':
        btnText = 'pending'
        break
      case 'requested':
        btnText = 'requested'
        break
      case 'unknown':
        btnText = 'Add friend'
        color = 'red2'
        isActive = true
        break
    }
  } else {
    isActive = true
    if (type === 'recieved') {
      btnText = 'Friend accept'
      color = 'red1'
    } else {
      btnText = 'Cancel request'
      color = 'red2'
    }
  }

  const handleClick = useCallback(() => {
    if (data.status === undefined) {
      const action = type === 'recieved' ? receiveFriendship : deleteSentRequest
      action({ friendshipId: data.friendshipId! })
    } else if (data.status === 'unknown') {
      addFriend({ toUsername: data.username })
    }
  }, [addFriend, data, deleteSentRequest, receiveFriendship, type])

  return (
    <button className={buttonStyle({ active: isActive, color })} onClick={handleClick}>
      {btnText}
    </button>
  )
}

const FriendCard = ({ data, type }: FriendCardProp) => {
  const { mutate: deleteFriendship } = useDeleteFriendshipRequest()

  const handleClick = useCallback(() => {
    deleteFriendship({ friendshipId: data.friendshipId! })
  }, [deleteFriendship, data.friendshipId])

  return (
    <div
      className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' })}
    >
      {type === 'recieved' && (
        <button
          className={css({
            cursor: 'pointer',
            position: 'absolute',
            right: 0,
            top: -1,
            p: 1,
            display: 'flex',
            color: 'darkGray.1',
            rounded: 'full',
            transition: 'all 0.256s',
            _hover: {
              bgColor: 'lightGray.1',
            },
          })}
          onClick={handleClick}
        >
          <CircleX size={16} />
        </button>
      )}
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
        {/* todo: 프로필 사진 등록 */}
        <Profile isAnonymous={false} isDeleted={false} character={data.character} onlyTitle={true} />
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
            <div>{data.homeUniversity ?? 'Home University Unknown'}</div>
            <Dot />
            <div>{data.major ?? 'Major Unknown'}</div>
          </div>
          <div className={css({ fontWeight: 400, fontSize: 12, color: 'darkGray.2' })}>
            {data.country ? findByAlpha2(data.country)?.name : 'Origin Country Unknown'}
          </div>
        </div>
      </div>
      <FriendCardBtn type={type} data={data} />
    </div>
  )
}

export default FriendCard
