import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { GetClubRequest, GetClubResponse, PostClubLikeRequest, PostClubLikeResponse } from '@/api/types/club'
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
  return useQuery({ queryKey: ['clubSearchResult', params], queryFn: () => getClub(query), retry: false })
}

const postClubLike = async ({ clubId }: PostClubLikeRequest) => {
  const response = await apiInterface.post<PostClubLikeResponse>(`/club/like/${clubId}`)
  return response.data
}

export const usePostClubLike = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postClubLike,
    onSuccess: (response, request) => {
      queryClient.setQueryData<GetClubResponse>(['clubSearchResult', request.queryParams], oldData => {
        if (oldData !== undefined) {
          return oldData.map(club => {
            if (club.clubId === response.clubId) {
              return response
            }
            return club
          })
        }
      })
    },
  })
}
