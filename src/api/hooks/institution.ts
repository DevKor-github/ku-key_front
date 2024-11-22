import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  ClubProfileProps,
  GetClubRequest,
  GetClubResponse,
  PostClubLikeRequest,
  PostClubLikeResponse,
} from '@/api/types/institution'
import { ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const getHotClub = async () => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/hot')
  return response.data
}

export const useGetHotClub = () => {
  return useSuspenseQuery({ queryKey: ['hotClub'], queryFn: getHotClub })
}

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

export const useGetClubSearch = (params: GetClubRequest) => {
  const query: GetClubRequest = {
    ...params,
    keyword: params.keyword || null,
  }
  return useQuery({
    queryKey: ['clubSearchResult', query],
    queryFn: () => getClub(query),
    retry: false,
  })
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

export const useGetCachedClubSearchResult = () => {
  const queryClient = useQueryClient()
  const isLogin = useAuth().authState ?? false

  const getCachedClubSearchResult = async (params: ClubSearchParams) => {
    const response = await queryClient.ensureQueryData<GetClubResponse>({
      queryKey: [
        'clubSearchResult',
        {
          ...params,
          isLogin,
          keyword: params.keyword || null,
        },
      ],
    })
    return response
  }

  return getCachedClubSearchResult
}
