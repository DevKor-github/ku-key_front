import { CourseSearchProps } from '@/domain/Timetable/hooks/useSearchCourse'

export const TIMETABLE_QUERY_KEY = {
  search: ({ year, semester, category, classification, keyword }: CourseSearchProps) => [
    'courseSearchResult',
    year,
    semester,
    category,
    classification,
    keyword,
  ],
}
