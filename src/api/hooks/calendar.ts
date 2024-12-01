import { useSuspenseQuery } from '@tanstack/react-query'

import { GetCalendarYearlyRequest, GetCalendarYearlyResponse } from '@/api/types/calendar'
import { apiInterface } from '@/util/axios/custom-axios'

const getAcademicCalendar = async (params: GetCalendarYearlyRequest) => {
  const response = await apiInterface.get<GetCalendarYearlyResponse>('/calendar/academic', { params })
  return response.data
}

export const useGetAcademicCalendar = ({ year, semester }: GetCalendarYearlyRequest) => {
  return useSuspenseQuery({
    queryKey: ['academic-calendar', year, semester],
    queryFn: () => getAcademicCalendar({ year, semester }),
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
