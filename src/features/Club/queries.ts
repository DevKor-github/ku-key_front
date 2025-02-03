import { GetClubRequest } from '@/api/types/club'

export const CLUB_QUERY_KEY = {
  clubSearchResults: (query: GetClubRequest) => ['clubSearchResult', query],
}
