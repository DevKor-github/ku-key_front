import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  GetFriendListRequest,
  GetFriendListResponse,
  GetRequestListRequest,
  GetRequestListResponse,
  GetSearchUserRequest,
  GetSearchUserResponse,
  PatchFriendshipRequestRequest,
  PostFriendshipRequest,
} from '@/api/types/friends'

const getFriendList = async ({ authHeader, keyword }: GetFriendListRequest): Promise<GetFriendListResponse> => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/friendship`, {
    headers: { Authorization: authHeader },
    params: { keyword },
  })
  return response.data
}
const getSearchUser = async ({ authHeader, username }: GetSearchUserRequest) => {
  const response = await axios.get<GetSearchUserResponse>(
    `http://${import.meta.env.VITE_API_SERVER}/friendship/search-user`,
    {
      headers: { Authorization: authHeader },
      params: { username },
    },
  )
  return response.data
}
const postFriendship = async ({ authHeader, toUsername }: PostFriendshipRequest) => {
  const response = await axios.post(
    `http://${import.meta.env.VITE_API_SERVER}/friendship`,
    { toUsername },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}
const getReceivedList = async ({ authHeader }: GetRequestListRequest) => {
  const response = await axios.get<GetRequestListResponse>(
    `http://${import.meta.env.VITE_API_SERVER}/friendship/received`,
    {
      headers: { Authorization: authHeader },
    },
  )
  return response.data
}
const patchFriendshipRequest = async ({ authHeader, friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await axios.patch(
    `http://${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`,
    {},
    { headers: { Authorization: authHeader } },
  )
  return response.data
}
const deleteFriendshipRequest = async ({ authHeader, friendshipId }: PatchFriendshipRequestRequest) => {
  const response = await axios.delete(`http://${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`, {
    headers: { Authorization: authHeader },
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
  })
}

/**
 * username(친구 추가용 id)를 query로 받아 해당하는 유저를 검색합니다.
 */
export const useGetSearchUser = ({ username }: Omit<GetSearchUserRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['searchResult', username],
    queryFn: () => getSearchUser({ authHeader, username: username }),
    enabled: !!username,
    retry: false,
  })
}

/**
 * 검색된 유저에게 친구 요청을 보냅니다. friendship 레코드가 새로 생성됩니다.
 */
export const useAddFriendship = () => {
  const authHeader = useAuthHeader()
  return useMutation({
    mutationFn: (props: Omit<PostFriendshipRequest, 'authHeader'>) => postFriendship({ authHeader, ...props }),
    onSuccess: () => {
      console.log('친구 요청 보내기 성공')
    },
  })
}

/**
 * 나에게 친구 요청을 보낸 유저 목록을 조회합니다.
 */
export const useGetReceivedList = () => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendsRequest'],
    queryFn: () => getReceivedList({ authHeader }),
  })
}

/**
 * friendshipId를 받아 해당 friendship 레코드의 areWeFriend column을 true로 업데이트합니다.
 */
export const useReceiveFriendship = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<PatchFriendshipRequestRequest, 'authHeader'>) =>
      patchFriendshipRequest({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest', 'friendList'] })
    },
  })
}

/**
 * friendshipId를 받아 해당 friendship 레코드를 삭제합니다.
 */
export const useDeleteFriendshipRequest = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<PatchFriendshipRequestRequest, 'authHeader'>) =>
      deleteFriendshipRequest({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest'] })
    },
  })
}
