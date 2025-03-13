export const COURSE_QUERY_KEY = {
  base: () => ['course'],
  recommendation: (limit: number) => [...COURSE_QUERY_KEY.base(), 'recommendation', limit],
}
