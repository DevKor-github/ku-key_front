import { useQueryClient } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import { GetClubResponse, PostClubLikeRequest, PostClubLikeResponse } from '@/api/types/club'
import { CLUB_QUERY_KEY } from '@/features/Club/queries'
import { apiInterface } from '@/util/axios/custom-axios'

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
        CLUB_QUERY_KEY.clubSearchResults({ ...queryParams, keyword: queryParams.keyword }),
        oldData => {
          if (oldData !== undefined) {
            return oldData.map(club => (club.clubId === response.clubId ? response : { ...club }))
          }
        },
      )
    },
  })
}
