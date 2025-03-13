import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { COURSE_QUERY_KEY } from '@/domain/Course/queries'
import { kuKeyClient } from '@/packages/api'
import { CourseRecommendationGetRequestParams } from '@/packages/api/ku-key/api/course-api'

type Props = CourseRecommendationGetRequestParams

export const useQueryCourseRecommendation = ({ limit }: Props) => {
  const read = useAsyncRead(kuKeyClient.api.CourseApi.courseRecommendationGet)
  return queryOptions({
    queryKey: COURSE_QUERY_KEY.recommendation(limit),
    queryFn: () => read({ limit }),
  })
}

export const useReadCourseRecommendation = ({ limit }: Props) => {
  const read = useQueryCourseRecommendation({ limit })
  return useSuspenseQuery(read)
}
