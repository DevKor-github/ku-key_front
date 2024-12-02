import { useSuspenseQuery } from '@tanstack/react-query'

import { ClubProfileProps } from '@/api/types/club'
import { HOME_QUERY_KEYS } from '@/features/HomeClub/queries'
import { apiInterface } from '@/util/axios/custom-axios'

const getHotClubs = async () => {
  const response = await apiInterface.get<ClubProfileProps[]>('/club/hot')
  return response.data
}

export const useReadHotClubs = () => {
  return useSuspenseQuery({ queryKey: HOME_QUERY_KEYS.hotClubs(), queryFn: getHotClubs })
}
