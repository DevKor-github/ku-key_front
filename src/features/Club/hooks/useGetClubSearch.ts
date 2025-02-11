import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { GetClubRequest, GetClubResponse } from '@/api/types/club'
import { CLUB_QUERY_KEY } from '@/features/Club/queries'
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

export const useGetClubSearch = (query: GetClubRequest) => {
  return useSuspenseQuery({
    queryKey: CLUB_QUERY_KEY.clubSearchResults(query),
    queryFn: () => getClub(query),
    retry: false,
  })
}

export const useGetCachedClubSearchResult = (params: ClubSearchParams) => {
  const queryClient = useQueryClient()
  const isLogin = useAuth().authState ?? false
  const query = { ...params, isLogin }

  const getCachedClubSearchResult = async () => {
    const response = await queryClient.ensureQueryData<GetClubResponse>({
      queryKey: CLUB_QUERY_KEY.clubSearchResults(query),
      queryFn: () => getClub(query),
    })
    return response
  }

  return getCachedClubSearchResult
}
