import { CourseSearchProps } from '@/domain/Timetable/hooks/useSearchCourse'
import { TimetableTodayGetRequestParams } from '@/packages/api/ku-key/api/timetable-api'

export const TIMETABLE_QUERY_KEY = {
  base: () => ['timetable'] as const,
  search: ({ year, semester, category, classification, keyword }: CourseSearchProps) => [
    ...TIMETABLE_QUERY_KEY.base(),
    'courseSearchResult',
    year,
    semester,
    category,
    classification,
    keyword,
  ],
  today: ({ year, semester }: TimetableTodayGetRequestParams) => [
    ...TIMETABLE_QUERY_KEY.base(),
    'today',
    year,
    semester,
  ],
}
