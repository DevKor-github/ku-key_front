import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  GetReviewsRequest,
  GetReviewsResponse,
  GetReviewSummaryRequest,
  GetReviewSummaryResponse,
  PostReviewRequest,
} from '@/api/types/courseReview'
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
    initialData: (): GetReviewSummaryResponse => ({
      totalRate: 0,
      reviewCount: 0,
      classLevel: 0,
      teamProject: 0,
      amountLearned: 0,
      teachingSkills: 0,
      attendance: 0,
      courseName: '',
    }),
  })
}

const getReviews = async (props: GetReviewsRequest) => {
  const response = await apiInterface.get<GetReviewsResponse>('/course-review', { params: props })
  return response.data
}

/**
 * 해당 교수의 해당 강의에 대해 강의평을 조회합니다. 열람권이 없으면 열람할 수 없습니다.
 */
export const useGetReviews = (props: GetReviewsRequest) => {
  return useQuery({
    queryKey: ['reviewList', props],
    queryFn: () => getReviews(props),
    initialData: () => ({ totalRate: 0, reviewCount: 0, reviews: [] }),
    retry: false,
  })
}

const postReview = async (props: PostReviewRequest) => {
  const response = await apiInterface.post('/course-review', props)
  return response
}

export const usePostReview = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['summary'] })
    },
  })
}