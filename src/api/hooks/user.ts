import { useQuery } from '@tanstack/react-query'

import { GetPointHistroyResponse } from '@/api/types/user'
import { apiInterface } from '@/util/axios/custom-axios'

const getPointHistory = async () => {
  const response = await apiInterface.get<GetPointHistroyResponse>('/user/point-history')
  return response.data
}

export const useGetPointHistory = () => {
  return useQuery({ queryKey: ['pointHistory'], queryFn: getPointHistory, initialData: [] })
}
