import { GetClubRequest } from '@/api/types/club'

export const CLUB_QUERY_KEY = {
  clubSearchResults: (query: GetClubRequest) => ['clubSearchResult', query],
  clubDetail: (clubID: number, isLogin: boolean) => ['clubDetail', clubID, isLogin],
}
