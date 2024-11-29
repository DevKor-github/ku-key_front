import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  GetMyReviewResponse,
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
  return useSuspenseQuery({
    queryKey: ['summary', props],
    queryFn: () => getReviewSummary(props),
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
  return useSuspenseQuery({
    queryKey: ['reviewList', props],
    queryFn: () => getReviews(props),
    retry: false,
  })
}

const postReview = async (props: PostReviewRequest) => {
  const response = await apiInterface.post('/course-review', props)
  return response
}

export const usePostReview = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['summary'] })
    },
  })
}

const getMyReview = async () => {
  const response = await apiInterface.get<GetMyReviewResponse>('/course-review/my-course-reviews')
  return response.data
}

export const useGetMyReview = () => {
  return useSuspenseQuery({
    queryKey: ['myReview'],
    queryFn: getMyReview,
  })
}

const getCheckSubmission = async (props: GetReviewSummaryRequest) => {
  const response = await apiInterface.get<boolean>('/course-review/check-submission', { params: props })
  return response.data
}

export const useGetCheckSubmission = (props: GetReviewSummaryRequest) => {
  return useQuery({
    queryKey: ['reviewSubmission', props],
    queryFn: () => getCheckSubmission(props),
    placeholderData: false,
  })
}
