import { Language } from '@/lib/constants/language'
import { CharacterType } from '@/types/community'

export type GetPointHistoryResponse = {
  date: string
  history: string
  changePoint: number
  resultPoint: number
}[]

export interface GetMyProfileResponse {
  username: string
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
  username: string
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

export interface PostLanguageRequest {
  language: Language
}

export interface GetKeyExpirationResponse {
  date: string
}
