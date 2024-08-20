import { useQuery } from '@tanstack/react-query'

import { GetCalendarYearlyRequest, GetCalendarYearlyResponse } from '@/api/types/home_sub'
import { getInitialAcademicCalendar } from '@/util/academicCalendar'
import { apiInterface } from '@/util/axios/custom-axios'

const getAcademicCalendar = async (params: GetCalendarYearlyRequest) => {
  const response = await apiInterface.get<GetCalendarYearlyResponse>('/calendar/academic', { params })
  return response.data
}

export const useGetAcademicCalendar = ({ year, semester }: GetCalendarYearlyRequest) => {
  return useQuery({
    queryKey: ['academic-calendar', year, semester],
    queryFn: () => getAcademicCalendar({ year, semester }),
    initialData: getInitialAcademicCalendar(semester),
  })
}
