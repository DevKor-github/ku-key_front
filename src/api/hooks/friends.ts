import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { GetFriendListRequest, GetFriendListResponse } from '@/api/types/friends'

const getFriendList = async ({ authHeader, keyword }: GetFriendListRequest): Promise<GetFriendListResponse> => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/friendship`, {
    headers: { Authorization: authHeader },
    params: {
      keyword,
    },
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
