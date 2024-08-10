import { useQuery } from '@tanstack/react-query'

import { GetClubRequest, GetClubResponse } from '@/api/types/club'
import { apiInterface } from '@/util/axios/custom-axios'

const getClub = async (params: GetClubRequest) => {
  const response = await apiInterface.get<GetClubResponse>('/club', {
    params,
  })
  return response.data
}

export const useGetClubSearch = (params: GetClubRequest) => {
  const query: GetClubRequest = {
    ...params,
    keyword: params.keyword || null,
  }
  return useQuery({ queryKey: ['clubSearchResult', query], queryFn: () => getClub(query), retry: false })
}
