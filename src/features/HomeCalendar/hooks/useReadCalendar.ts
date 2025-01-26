import { useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { CALENDAR_QUERY_KEY } from '@/features/HomeCalendar/queries'
import { kuKeyClient } from '@/packages/api'

/**AS-IS */
// const getCalendar = async (year: number, month: number) => {
//   const response = await apiInterface.get<CalendarResponse[]>(`/calendar?year=${year}&month=${month}`)
//   return response.data
// }

/**TO-BE */
type Props = {
  year: number
  month: number
}
export const useQueryGetCalendar = ({ year, month }: Props) => {
  const read = useAsyncRead(kuKeyClient.api.CalendarApi.calendarGet)
  return {
    queryKey: CALENDAR_QUERY_KEY.base(year, month),
    queryFn: () => read({ year, month }),
  }
}

export const useReadCalendar = ({ year, month }: Props) => {
  const query = useQueryGetCalendar({ year, month })
  return useSuspenseQuery({ ...query })
}
