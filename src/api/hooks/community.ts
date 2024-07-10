import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { GetBoardResponse } from '@/api/types/community'

const getBoard = async (authHeader: string | null) => {
  const response = await axios.get<GetBoardResponse>(`${import.meta.env.VITE_API_SERVER}/board`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useGetBoard = () => {
  const authHeader = useAuthHeader()
  return useQuery({ queryKey: ['board'], queryFn: () => getBoard(authHeader), initialData: [] })
}
