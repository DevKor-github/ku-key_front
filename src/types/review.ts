import { GetReviewSummaryResponse } from '@/api/types/courseReview'
import { SemesterType } from '@/types/timetable'

export interface ReviewType {
  id: number
  rate: number
  createdAt: string
  reviewer: string
  year: string
  semester: SemesterType
  myRecommend: boolean
  recommendCount: number
  text: string
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
}

export interface CourseSummaryType extends GetReviewSummaryResponse {
  courseCode: string
  prof: string
}

export type CriteriaType = 'createdAt' | 'recommendCount' | 'rate'
export type DirectionType = 'DESC' | 'ASC'
