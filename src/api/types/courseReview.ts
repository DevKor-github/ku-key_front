import { CriteriaType, DirectionType, ReviewType } from '@/types/review'

export interface GetReviewSummaryRequest {
  professorName?: string
  courseCode?: string
}

export interface GetReviewSummaryResponse {
  totalRate: number
  reviewCount: number
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
  courseName: string
}

export interface GetReviewsRequest {
  professorName: string
  courseCode: string
  criteria: CriteriaType
  direction: DirectionType
}

export interface GetReviewsResponse {
  totalRate: number
  reviewCount: number
  reviews: ReviewType[]
}
