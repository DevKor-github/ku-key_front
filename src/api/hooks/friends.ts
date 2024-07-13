import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  GetFriendListRequest,
  GetFriendListResponse,
  GetFriendTimetableRequest,
  GetRequestListRequest,
  GetRequestListResponse,
  GetSearchUserRequest,
  GetSearchUserResponse,
  PatchFriendshipRequestRequest,
  PostFriendshipRequest,
} from '@/api/types/friends'
import { GetTimetableByTimetableIdResponse } from '@/api/types/timetable'

const getFriendList = async ({ authHeader, keyword }: GetFriendListRequest) => {
  const response = await axios.get<GetFriendListResponse>(`${import.meta.env.VITE_API_SERVER}/friendship`, {
    headers: { Authorization: authHeader },
    params: { keyword },
  })
  return response.data
}

/**
 * 전체 친구 목록을 조회하거나, keyword를 query로 받아 친구 목록을 필터링하여 조회합니다.
 */
export const useGetFriendList = (props: Omit<GetFriendListRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendList'],
    queryFn: () => getFriendList({ authHeader, ...props }),
    initialData: [],
  })
}

const getSearchUser = async ({ authHeader, username }: GetSearchUserRequest) => {
  const response = await axios.get(`${import.meta.env.VITE_API_SERVER}/friendship/search-user`, {
    headers: { Authorization: authHeader },
    params: { username },
  })
  return response.data
}

/**
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다.
 */
export const useGetSearchUser = ({ username }: Pick<GetSearchUserRequest, 'username'>) => {
  const authHeader = useAuthHeader()
  return useQuery<GetSearchUserResponse, AxiosError>({
    queryKey: ['searchResult', username],
    queryFn: () => getSearchUser({ authHeader, username }),
    enabled: !!username,
    retry: false,
  })
}

const postFriendship = async ({ authHeader, toUsername }: PostFriendshipRequest) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_SERVER}/friendship`,
    { toUsername },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

/**
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 */
export const useAddFriendship = () => {
  const authHeader = useAuthHeader()

  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ toUsername }: Pick<PostFriendshipRequest, 'toUsername'>) =>
      postFriendship({ authHeader, toUsername }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const getReceivedList = async ({ authHeader }: GetRequestListRequest) => {
  const response = await axios.get<GetRequestListResponse>(`${import.meta.env.VITE_API_SERVER}/friendship/received`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 */
export const useGetReceivedList = () => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendsRequest'],
    queryFn: () => getReceivedList({ authHeader }),
    initialData: [],
  })
}

const patchFriendshipRequest = async ({ authHeader, friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`,
    {},
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

/**
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 */
export const useReceiveFriendship = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ friendshipId }: Pick<PatchFriendshipRequestRequest, 'friendshipId'>) =>
      patchFriendshipRequest({ authHeader, friendshipId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest'] })
      queryClient.invalidateQueries({ queryKey: ['friendList'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const deleteFriendshipRequest = async ({ authHeader, friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteFriendshipRequest = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ friendshipId }: Pick<PatchFriendshipRequestRequest, 'friendshipId'>) =>
      deleteFriendshipRequest({ authHeader, friendshipId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const deleteFriendship = async ({ authHeader, friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_SERVER}/friendship/${friendshipId}`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

/**
 * 이미 친구로 등록된 유저에 대해, friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteFriendship = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ friendshipId }: Pick<PatchFriendshipRequestRequest, 'friendshipId'>) =>
      deleteFriendship({ authHeader, friendshipId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendList'] })
      queryClient.invalidateQueries({ queryKey: ['searchResult'] })
    },
  })
}

const getFriendTimetable = async ({ authHeader, friendId, semester, year }: GetFriendTimetableRequest) => {
  const response = await axios.get<GetTimetableByTimetableIdResponse>(
    `${import.meta.env.VITE_API_SERVER}/friendship/friend-timetable`,
    {
      headers: { Authorization: authHeader },
      params: { friendId, semester, year },
    },
  )
  return response.data
}

/**
 * 친구 ID, 연도, 학기를 입력받아 해당 학기에 친구의 대표 시간표를 조회합니다.
 */
export const useGetFriendTimetable = (props: Omit<GetFriendTimetableRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendTimetable', props],
    queryFn: () => getFriendTimetable({ authHeader, ...props }),
    initialData: {
      courses: [],
      schedules: [],
      color: 'Red',
    },
  })
}
