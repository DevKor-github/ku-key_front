import { useState } from 'react'

import { CourseCategoryType } from '@/components/timetable/LectureBottomSheet/AddClass/constants'

export interface CourseQueryInterface {
  keyword: string
  category: CourseCategoryType
  classification: string | null
}

const initialQuery: CourseQueryInterface = {
  category: 'All Class',
  keyword: '',
  classification: null,
}

export const useCourseSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const search = (queryFn: (prev: CourseQueryInterface) => CourseQueryInterface) => {
    setSearchQuery(prev => queryFn(prev))
  }

  return { searchQuery, search }
}
