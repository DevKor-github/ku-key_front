export interface ReviewType {
  id: number
  rate: number
  createdAt: string
  reviewer: string
  year: string
  semester: string
  myRecommend: boolean
  recommendCount: number
  text: string
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
}

export type CriteriaType = 'createdAt' | 'recommended' | 'rate'
export type DirectionType = 'DESC' | 'ASC'
