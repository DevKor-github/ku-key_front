import { FriendInterface, FriendRequestInterface } from '@/types/friends'

export interface GetFriendListRequest {
  authHeader: string | null
  keyword: string | null
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

export interface PostFriendshipRequest {
  authHeader: string | null
  toUsername: string
}

export interface GetRequestListRequest {
  authHeader: string | null
}

export type GetRequestListResponse = FriendRequestInterface[]

export interface PatchFriendshipRequestRequest {
  authHeader: string | null
  friendshipId: number
}
