import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  GetFriendListRequest,
  GetFriendListResponse,
  GetSearchUserRequest,
  GetSearchUserResponse,
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

export const getSearchUser = async ({ authHeader, username }: GetSearchUserRequest) => {
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
