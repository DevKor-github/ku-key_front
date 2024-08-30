import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { GetClubRequest, GetClubResponse, PostClubLikeRequest, PostClubLikeResponse } from '@/api/types/club'
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

export const useGetClubSearch = (params: GetClubRequest) => {
  const isLogin = useAuth().authState ?? false
  const query: GetClubRequest = {
    ...params,
    keyword: params.keyword || null,
  }
  return useQuery({
    queryKey: ['clubSearchResult', query, isLogin],
    queryFn: () => getClub({ ...query, isLogin }),
    retry: false,
  })
}

const postClubLike = async ({ clubId }: PostClubLikeRequest) => {
  const response = await apiInterface.post<PostClubLikeResponse>(`/club/like/${clubId}`)
  return response.data
}

export const usePostClubLike = () => {
  const queryClient = useQueryClient()
  const isLogin = useAuth().authState ?? false
  return useMutation({
    mutationFn: postClubLike,
    onSuccess: (response, { queryParams }) => {
      queryClient.setQueryData<GetClubResponse>(
        ['clubSearchResult', { ...queryParams, keyword: queryParams.keyword || null, isLogin }],
        oldData => {
          if (oldData !== undefined) {
            return oldData.map(club => (club.clubId === response.clubId ? response : club))
          }
        },
      )
    },
  })
}
