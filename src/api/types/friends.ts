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

export interface GetSearchUserRequest {
  authHeader: string | null
  username: string
}

export interface GetSearchUserResponse {
  language: string
  major: string
  name: string
  username: string
}

export interface AddFriendRequest {
  authHeader: string | null
  toUsername: string
}

export interface FriendRequest {
  friendshipId: number
  userId: number
  name: string
  username: string
  major: string
  language: string
}
export interface GetRequestListRequest {
  authHeader: string | null
}

export type GetRequestListResponse = FriendRequest[]

export interface ReceiveFriendshipRequest {
  authHeader: string | null
  friendshipId: number
}
