import { useQuery } from '@tanstack/react-query'

import { GetReviewSummaryRequest, GetReviewSummaryResponse } from '@/api/types/courseReview'
import { apiInterface } from '@/util/axios/custom-axios'

const getReviewSummary = async (props: GetReviewSummaryRequest) => {
  const response = await apiInterface.get<GetReviewSummaryResponse>('/course-review/summary', { params: props })
  return response.data
}

/**
 * 해당 교수의 해당 강의에 대한 강의평들을 종합한 강의평 요약을 조회합니다.
 */
export const useGetReviewSummary = (props: GetReviewSummaryRequest) => {
  return useQuery({
    queryKey: ['summary'],
    queryFn: () => getReviewSummary(props),
  })
}
