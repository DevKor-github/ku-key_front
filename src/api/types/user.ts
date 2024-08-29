import { Language } from '@/lib/constants/language'

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
  startDay: string
  endDay: string
  point: number
  languages: Language[]
  level: number
  type: string
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
