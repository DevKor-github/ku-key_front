import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  GetFriendListRequest,
  GetFriendListResponse,
  GetFriendTimetableRequest,
  GetRequestListResponse,
  GetSearchUserRequest,
  GetSearchUserResponse,
  PatchFriendshipRequestRequest,
  PostFriendshipRequest,
} from '@/api/types/friends'
import { GetFriendTimetableResponse } from '@/api/types/timetable'
import { apiInterface } from '@/util/axios/custom-axios'

const getFriendList = async ({ keyword }: GetFriendListRequest) => {
  const response = await apiInterface.get<GetFriendListResponse>(`/friendship`, {
    params: { keyword },
  })
  return response.data
}

/**
 * 전체 친구 목록을 조회하거나, keyword를 query로 받아 친구 목록을 필터링하여 조회합니다.
 */
export const useGetFriendList = ({ keyword }: GetFriendListRequest) => {
  return useSuspenseQuery({
    queryKey: ['friendList', keyword],
    queryFn: () => getFriendList({ keyword }),
    initialData: [],
  })
}

const getSearchUser = async ({ username }: GetSearchUserRequest) => {
  const response = await apiInterface.get(`/friendship/search-user`, {
    params: { username },
  })
  return response.data
}

/**
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다.
 */
export const useGetSearchUser = ({ username }: GetSearchUserRequest) => {
  return useQuery<GetSearchUserResponse, AxiosError>({
    queryKey: ['searchResult', username],
    queryFn: () => getSearchUser({ username }),
    enabled: !!username,
    retry: false,
  })
}

const postFriendship = async ({ toUsername }: PostFriendshipRequest) => {
  const response = await apiInterface.post(`/friendship`, { toUsername })
  return response.data
}

/**
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 */
export const useAddFriendship = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postFriendship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
      queryClient.invalidateQueries({ queryKey: ['requestedFriends'] })
    },
  })
}

const getReceivedList = async () => {
  const response = await apiInterface.get<GetRequestListResponse>(`/friendship/received`)
  return response.data
}

/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 */
export const useGetReceivedList = () => {
  return useQuery({
    queryKey: ['receivedFriends'],
    queryFn: getReceivedList,
    initialData: [],
  })
}

const patchFriendshipRequest = async ({ friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await apiInterface.patch(`/friendship/received/${friendshipId}`)
  return response.data
}

/**
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 */
export const useReceiveFriendship = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: patchFriendshipRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receivedFriends'] })
      queryClient.invalidateQueries({ queryKey: ['friendList'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const deleteFriendshipRequest = async ({ friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await apiInterface.delete(`/friendship/received/${friendshipId}`)
  return response.data
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteFriendshipRequest = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: deleteFriendshipRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receivedFriends'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const deleteFriendship = async ({ friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await apiInterface.delete(`/friendship/${friendshipId}`)
  return response.data
}

/**
 * 이미 친구로 등록된 유저에 대해, friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteFriendship = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: deleteFriendship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendList'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const getFriendTimetable = async (props: GetFriendTimetableRequest) => {
  const response = await apiInterface.get<GetFriendTimetableResponse>(`/friendship/friend-timetable`, {
    params: props,
  })
  return response.data
}

/**
 * 친구 ID, 연도, 학기를 입력받아 해당 학기에 친구의 대표 시간표를 조회합니다.
 */
export const useGetFriendTimetable = (props: Omit<GetFriendTimetableRequest, 'authHeader'>) => {
  return useQuery({
    queryKey: ['friendTimetable', props],
    queryFn: () => getFriendTimetable(props),
    initialData: {
      courses: [],
      schedules: [],
      color: 'Red',
      timetableName: '',
    },
    retry: false,
  })
}

const deleteSentRequest = async ({ friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await apiInterface.delete(`/friendship/sent/${friendshipId}`)
  return response.data
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteSentRequest = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: deleteSentRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['requestedFriends'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const getRequestedList = async () => {
  const response = await apiInterface.get<GetRequestListResponse>(`/friendship/sent`)
  return response.data
}

/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 */
export const useGetRequestedList = () => {
  return useQuery({
    queryKey: ['requestedFriends'],
    queryFn: getRequestedList,
    initialData: [],
  })
}
