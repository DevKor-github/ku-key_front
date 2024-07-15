import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { GetByCourseCodeRequest, GetByCourseCodeResponse } from '@/api/types/course'

const getByCourseCode = async ({ authHeader, courseCode }: GetByCourseCodeRequest) => {
  const response = await axios.get<GetByCourseCodeResponse>(
    `${import.meta.env.VITE_API_URL}/course/search-course-code`,
    {
      headers: { Authorization: authHeader },
      params: {
        courseCode,
      },
    },
  )
  return response.data
}

export const useGetByCourseCode = ({ courseCode }: Pick<GetByCourseCodeRequest, 'courseCode'>) => {
  const authHeader = useAuthHeader()
  return useQuery<GetByCourseCodeResponse>({
    queryKey: ['courseSearchResult', courseCode],
    queryFn: () => getByCourseCode({ authHeader, courseCode }),
    enabled: !!courseCode,
    retry: false,
  })
}
