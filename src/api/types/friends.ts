import { CharacterType } from '@/types/community'
import { FriendInterface, friendStatusType } from '@/types/friends'
import { SemesterType } from '@/types/timetable'

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
  country: string
  status: friendStatusType
  level: number
  homeUniversity: string
  character: {
    type: CharacterType
    level: number | null
  }
}

export interface PostFriendshipRequest {
  toUsername: string
}

export type GetRequestListResponse = FriendInterface[]

export interface PatchFriendshipRequestRequest {
  friendshipId: number
}

export interface GetFriendTimetableRequest {
  username: string
  year: string
  semester: SemesterType
}
