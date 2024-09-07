import { Language } from '@/lib/constants/language'
import { CharacterType } from '@/types/community'

export type GetPointHistroyResponse = {
  date: string
  history: string
  changePoint: number
  resultPoint: number
}[]

export interface GetMyProfileResponse {
  name: string
  country: string
  homeUniversity: string
  major: string
  startDay: string | null
  endDay: string | null
  point: number
  languages: Language[]
  level: number
  type: CharacterType
  selectedLevel: number
}

export interface PatchMyProfileRequest {
  name: string
  country: string
  homeUniversity: string
  major: string
}

export interface PostPurchaseItemRequest {
  requiredPoints: number
  itemCategory: 'COURSE_REVIEW_READING_TICKET' | 'CHARACTER_EVOLUTION' | 'CHARACTER_TYPE_CHANGE'
  days?: number
}

export interface PatchExchangeDayRequest {
  startDay: string
  endDay: string
}
