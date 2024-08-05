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
