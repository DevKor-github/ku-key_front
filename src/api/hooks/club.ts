import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  ClubProfileProps,
  GetClubRequest,
  GetClubResponse,
  PostClubLikeRequest,
  PostClubLikeResponse,
} from '@/api/types/club'
import { ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const getClubRecommended = async (isLogin: boolean) => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/recommend', { params: { isLogin } })
  return response.data
}

export const useGetClubRecommended = () => {
  const isLogin = useAuth().authState ?? false
  return useSuspenseQuery({
    queryKey: ['clubRecommended', isLogin],
    queryFn: () => getClubRecommended(isLogin),
  })
}

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
  return useQuery({
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

const postClubLike = async ({ clubId }: PostClubLikeRequest) => {
  const response = await apiInterface.post<PostClubLikeResponse>(`/club/like/${clubId}`)
  return response.data
}

export const usePostClubLike = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postClubLike,
    onSuccess: (response, { queryParams }) => {
      queryClient.setQueryData<GetClubResponse>(
        ['clubSearchResult', { ...queryParams, keyword: queryParams.keyword || null }],
        oldData => {
          if (oldData !== undefined) {
            return oldData.map(club => (club.clubId === response.clubId ? response : { ...club }))
          }
        },
      )
    },
  })
}
