import { CategoryType } from '@/components/club/constants'
import { ClubInterface } from '@/types/club'

export interface GetClubRequest {
  sortBy: 'like'
  wishList: boolean
  category: CategoryType
  keyword: string | null
}

export type GetClubResponse = ClubInterface[]
