import { CriteriaType, DirectionType, ReviewType } from '@/types/review'
import { SemesterType } from '@/types/timetable'

export interface GetReviewSummaryRequest {
  professorName: string
  courseCode: string
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

export interface PostReviewRequest {
  rate: number
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
  textReview: string
  year: string
  semester: SemesterType
  professorName: string
  courseCode: string
}
