export const HOME_CALENDAR_QUERY_KEY = {
  base: () => ['home-calendar'] as const,
  banner: () => [...HOME_CALENDAR_QUERY_KEY.base(), 'banner'] as const,
}
