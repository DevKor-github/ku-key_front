import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { GetByCourseCodeRequest, GetByCourseNameInGeneralRequest, GetCourseResponse } from '@/api/types/course'

const getByCourseCode = async ({ authHeader, courseCode }: GetByCourseCodeRequest) => {
  const response = await axios.get<GetCourseResponse>(`${import.meta.env.VITE_API_URL}/course/search-course-code`, {
    headers: { Authorization: authHeader },
    params: {
      courseCode,
    },
  })
  return response.data
}

export const useGetByCourseCode = ({ courseCode }: Pick<GetByCourseCodeRequest, 'courseCode'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['courseSearchResult', courseCode],
    queryFn: () => getByCourseCode({ authHeader, courseCode }),
    enabled: !!courseCode,
    retry: false,
  })
}

const getByCourseNameInGeneral = async ({ authHeader, courseName }: GetByCourseNameInGeneralRequest) => {
  const response = await axios.get<GetCourseResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-general-course-name`,
    { headers: { Authorization: authHeader }, params: { courseName } },
  )
  return response.data
}

export const useGetByCourseNameInGeneral = ({ courseName }: Pick<GetByCourseNameInGeneralRequest, 'courseName'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['courseSearchResult', courseName],
    queryFn: () => getByCourseNameInGeneral({ authHeader, courseName }),
    enabled: !!courseName,
    retry: false,
  })
}
