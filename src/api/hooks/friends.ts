import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  AddFriendRequest,
  GetFriendListRequest,
  GetFriendListResponse,
  GetRequestListRequest,
  GetRequestListResponse,
  GetSearchUserRequest,
  GetSearchUserResponse,
  ReceiveFriendshipRequest,
} from '@/api/types/friends'

const getFriendList = async ({ authHeader, keyword }: GetFriendListRequest): Promise<GetFriendListResponse> => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/friendship`, {
    headers: { Authorization: authHeader },
    params: { keyword },
  })
  return response.data
}

export const useGetFriendList = (props: Omit<GetFriendListRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendList'],
    queryFn: () => getFriendList({ authHeader, ...props }),
  })
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

export const useGetSearchUser = ({ username }: Omit<GetSearchUserRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['searchResult', username],
    queryFn: () => getSearchUser({ authHeader, username: username }),
    enabled: !!username,
    retry: false,
  })
}

const addFriend = async ({ authHeader, toUsername }: AddFriendRequest) => {
  const response = await axios.post(
    `http://${import.meta.env.VITE_API_SERVER}/friendship`,
    { toUsername },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

export const useAddFriend = () => {
  const authHeader = useAuthHeader()
  return useMutation({
    mutationFn: (props: Omit<AddFriendRequest, 'authHeader'>) => addFriend({ authHeader, ...props }),
    onSuccess: () => {
      console.log('친구 요청 보내기 성공')
    },
  })
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

export const useGetReceivedList = () => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['friendsRequest'],
    queryFn: () => getReceivedList({ authHeader }),
  })
}

const receiveFriendship = async ({ authHeader, friendshipId }: ReceiveFriendshipRequest) => {
  const response = await axios.patch(
    `http://${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`,
    {},
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

export const useReceiveFriendship = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<ReceiveFriendshipRequest, 'authHeader'>) => receiveFriendship({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest', 'friendList'] })
    },
  })
}

const deleteFriendshipRequest = async ({ authHeader, friendshipId }: ReceiveFriendshipRequest) => {
  const response = await axios.delete(`http://${import.meta.env.VITE_API_SERVER}/friendship/received/${friendshipId}`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useDeleteFriendshipRequest = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<ReceiveFriendshipRequest, 'authHeader'>) =>
      deleteFriendshipRequest({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friendsRequest'] })
    },
  })
}
