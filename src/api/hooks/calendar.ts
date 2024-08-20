import { useQuery } from '@tanstack/react-query'

import { CalendarResponse } from '@/api/types/calendar'
import { apiInterface } from '@/util/axios/custom-axios'

const getCalendar = async (year: number, month: number) => {
  const response = await apiInterface.get<CalendarResponse[]>(`/calendar?year=${year}&month=${month}`)
  return response.data
}

export const useGetCalendar = (year: number, month: number) => {
  return useQuery({
    queryKey: ['calendar', year, month],
    queryFn: () => getCalendar(year, month),
    initialData: [{ date: new Date(), event: [], eventCount: 0 }] as CalendarResponse[],
  })
}
