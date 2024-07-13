import { FriendInterface, FriendRequestInterface, friendStatusType } from '@/types/friends'

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
  name: string
  username: string
  major: string
  language: string
  status: friendStatusType
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

export interface GetFriendTimetableRequest {
  authHeader: string | null
  friendId: string
  year: string
  semester: string
}
