import { useQuery } from '@tanstack/react-query'

import { GetCalendarYearlyRequest, GetCalendarYearlyResponse } from '@/api/types/home_sub'
import { initialGetCalendarYearlyResponse } from '@/util/academicCalendar'
import { apiInterface } from '@/util/axios/custom-axios'

const getCalendarYearly = async ({ year }: GetCalendarYearlyRequest) => {
  const response = await apiInterface.get<GetCalendarYearlyResponse>('/calendar/yearly', { params: { year } })
  return response.data
}

export const useGetCalendarYearly = ({ year }: GetCalendarYearlyRequest) => {
  return useQuery({
    queryKey: ['academic-calendar', year],
    queryFn: () => getCalendarYearly({ year }),
    initialData: initialGetCalendarYearlyResponse,
  })
}
