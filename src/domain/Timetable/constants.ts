export const CONTENTS_MAX_W = '70rem'

export const COURSE_CATEGORY_LIST = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const

export type CourseCategoryType = (typeof COURSE_CATEGORY_LIST)[number]

export interface CourseQueryInterface {
  keyword: string
  category: CourseCategoryType
  classification: string | undefined
}
