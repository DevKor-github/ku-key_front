import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { BANNER_QUERY_KEY } from '@/domain/Banner/queries'
import { kuKeyClient } from '@/packages/api'

export const useQueryHomeBanner = () => {
  const read = useAsyncRead(kuKeyClient.api.BannerApi.bannerGet)
  return queryOptions({
    queryKey: BANNER_QUERY_KEY.banner(),
    queryFn: () => read(),
  })
}

export const useReadHomeBanner = () => {
  const query = useQueryHomeBanner()
  return useSuspenseQuery(query)
}
