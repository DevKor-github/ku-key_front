import { CharacterType } from '@/types/community'

export interface FriendInterface {
  friendshipId: number
  userId: number
  name: string
  username: string
  major: string
  country: string
  homeUniversity: string
  character: {
    type: CharacterType
    level: number | null
  }
}

export type friendStatusType = 'me' | 'friend' | 'requested' | 'pending' | 'unknown'
