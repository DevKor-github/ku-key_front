import { useQueryClient } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import { PostClubLikeRequest, PostClubLikeResponse } from '@/api/types/club'
import { CLUB_QUERY_KEY } from '@/domain/Club/queries'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const postClubLike = async ({ clubId }: PostClubLikeRequest) => {
  const response = await apiInterface.post<PostClubLikeResponse>(`/club/like/${clubId}`)
  return response.data
}

export const usePostClubLike = () => {
  const isLogin = useAuth().authState ?? false
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postClubLike,
    onSuccess: newData => {
      queryClient.invalidateQueries({ queryKey: CLUB_QUERY_KEY.clubSearchResults({ isLogin }) })
      queryClient.invalidateQueries({ queryKey: CLUB_QUERY_KEY.clubDetail(Number(newData.clubId), isLogin) })
    },
  })
}
