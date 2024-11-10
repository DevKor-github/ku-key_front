import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { CalendarResponse, GetCalendarYearlyRequest, GetCalendarYearlyResponse } from '@/api/types/calendar'
import { getInitialAcademicCalendar } from '@/util/academicCalendar'
import { apiInterface } from '@/util/axios/custom-axios'

const getCalendar = async (year: number, month: number) => {
  const response = await apiInterface.get<CalendarResponse[]>(`/calendar?year=${year}&month=${month}`)
  return response.data
}

export const useGetCalendar = (year: number, month: number) => {
  return useSuspenseQuery({
    queryKey: ['calendar', year, month],
    queryFn: () => getCalendar(year, month),
    // initialData: [{ date: new Date(), event: [], eventCount: 0 }] as CalendarResponse[],
  })
}

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

const getBannerImages = async () => {
  const response = await apiInterface.get<
    {
      imageUrl: string
    }[]
  >('/calendar/banner-image-urls')
  return response.data
}

export const useGetBannerImages = () => {
  return useSuspenseQuery({
    queryKey: ['banner-images'],
    queryFn: getBannerImages,
  })
}
