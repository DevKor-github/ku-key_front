export const COURSE_CATEGORY_LIST = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const

export type CourseCategoryType = (typeof COURSE_CATEGORY_LIST)[number]
