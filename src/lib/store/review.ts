import { atom } from 'jotai/vanilla'

import { CourseSummaryType } from '@/types/review'

export const courseSummary = atom<CourseSummaryType>({
  courseCode: '',
  prof: '',
  totalRate: 0,
  reviewCount: 0,
  classLevel: 0,
  teamProject: 0,
  amountLearned: 0,
  teachingSkills: 0,
  attendance: 0,
  courseName: '',
})
