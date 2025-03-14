import { useQueryClient } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import { PostClubLikeRequest, PostClubLikeResponse } from '@/api/types/club'
import { CLUB_QUERY_KEY } from '@/domain/Club/queries'
import { apiInterface } from '@/util/axios/custom-axios'

const postClubLike = async ({ clubId }: PostClubLikeRequest) => {
  const response = await apiInterface.post<PostClubLikeResponse>(`/club/like/${clubId}`)
  return response.data
}

export const usePostClubLike = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postClubLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CLUB_QUERY_KEY.base() })
    },
  })
}
