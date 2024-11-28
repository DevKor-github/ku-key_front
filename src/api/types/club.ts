import { CategoryType } from '@/components/club/constants'
import { ClubInterface } from '@/types/club'

export interface ClubProfileProps {
  name: string
  summary: string
  imageUrl: string
  category: string
  ranking: number
}

export interface GetClubRequest {
  sortBy?: 'like' | null
  wishList?: boolean
  category?: CategoryType
  keyword?: string | null
  isLogin: boolean
}

export type GetClubResponse = ClubInterface[]

export interface PostClubLikeRequest {
  queryParams: GetClubRequest
  clubId: number
}

export type PostClubLikeResponse = ClubInterface
