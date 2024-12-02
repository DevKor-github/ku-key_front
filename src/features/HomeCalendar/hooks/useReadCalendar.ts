import { useSuspenseQuery } from '@tanstack/react-query'

import { CalendarResponse } from '@/api/types/calendar'
import { CALENDAR_QUERY_KEY } from '@/features/HomeCalendar/queries'
import { apiInterface } from '@/util/axios/custom-axios'

const getCalendar = async (year: number, month: number) => {
  const response = await apiInterface.get<CalendarResponse[]>(`/calendar?year=${year}&month=${month}`)
  return response.data
}

export const useReadCalendar = (year: number, month: number) => {
  return useSuspenseQuery({
    queryKey: CALENDAR_QUERY_KEY.base(year, month),
    queryFn: () => getCalendar(year, month),
  })
}
