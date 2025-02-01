import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { GetClubRequest, GetClubResponse } from '@/api/types/club'
import { ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const getClub = async (params: GetClubRequest) => {
  const response = await apiInterface.get<GetClubResponse>('/club', {
    params,
    headers: {
      'Cache-Control': 'no-store',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  return response.data
}

const createClubSearchQuery = (params: GetClubRequest) => {
  const query: GetClubRequest = {
    ...params,
    keyword: params.keyword || null,
  }
  return {
    queryKey: ['clubSearchResult', query],
    queryFn: () => getClub(query),
  }
}

export const useGetClubSearch = (params: GetClubRequest) => {
  return useSuspenseQuery({
    ...createClubSearchQuery(params),
    retry: false,
  })
}

export const useGetCachedClubSearchResult = (params: ClubSearchParams) => {
  const queryClient = useQueryClient()
  const isLogin = useAuth().authState ?? false
  const query = createClubSearchQuery({ ...params, isLogin })

  const getCachedClubSearchResult = async () => {
    const response = await queryClient.ensureQueryData<GetClubResponse>(query)
    return response
  }

  return getCachedClubSearchResult
}
