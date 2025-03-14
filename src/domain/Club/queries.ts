import { GetClubRequest } from '@/api/types/club'

export const CLUB_QUERY_KEY = {
  base: () => ['club'] as const,
  clubSearchResults: (query: GetClubRequest) => [...CLUB_QUERY_KEY.base(), 'clubSearchResult', query] as const,
  clubDetail: (clubID: number, isLogin: boolean) => [...CLUB_QUERY_KEY.base(), 'clubDetail', clubID, isLogin] as const,
}
