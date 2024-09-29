import { useInfiniteQuery } from '@tanstack/react-query'

import { GetNoticeResponse } from '@/api/types/notice'
import { apiInterface } from '@/util/axios/custom-axios'

const getNotice = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<GetNoticeResponse>('/notice', {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetNotice = () => {
  return useInfiniteQuery({
    queryKey: ['notice'],
    queryFn: ({ pageParam }: { pageParam: string | undefined }) => getNotice(20, pageParam),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: undefined,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
