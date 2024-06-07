export interface GetFriendListRequest {
  authHeader: string | null
  keyword: string | null
}

interface FriendInterface {
  friendshipId: number
  userId: number
  name: string
  username: string
  major: string
  language: string
}

export type GetFriendListResponse = FriendInterface[]
