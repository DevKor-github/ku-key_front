export interface FriendInterface {
  friendshipId: number
  userId: number
  name: string
  username: string
  major: string
  language: string
}

export interface FriendRequestInterface {
  friendshipId: number
  userId: number
  name: string
  username: string
  major: string
  language: string
}

export type friendStatusType = 'me' | 'friend' | 'requested' | 'pending' | 'unknown'
