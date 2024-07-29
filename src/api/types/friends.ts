import { FriendInterface, FriendRequestInterface, friendStatusType } from '@/types/friends'

export interface GetFriendListRequest {
  keyword: string | null
}

export type GetFriendListResponse = FriendInterface[]

export interface GetSearchUserRequest {
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
  toUsername: string
}

export type GetRequestListResponse = FriendRequestInterface[]

export interface PatchFriendshipRequestRequest {
  friendshipId: number
}

export interface GetFriendTimetableRequest {
  username: string
  year: string
  semester: string
}
