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

export type CriteriaType = 'createdAt' | 'recommendCount' | 'rate'
export type DirectionType = 'DESC' | 'ASC'

export interface CourseReviewQueryInterface {
  code: string
  professorName: string
}
