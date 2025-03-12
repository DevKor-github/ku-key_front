import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { HOME_CALENDAR_QUERY_KEY } from '@/domain/HomeCalendar/queries'
import { kuKeyClient } from '@/packages/api'

export const useQueryHomeBanner = () => {
  const read = useAsyncRead(kuKeyClient.api.CalendarApi.calendarBannerImageUrlsGet)
  return queryOptions({
    queryKey: HOME_CALENDAR_QUERY_KEY.banner(),
    queryFn: () => read(),
  })
}

export const useReadHomeBanner = () => {
  const query = useQueryHomeBanner()
  return useSuspenseQuery(query)
}
