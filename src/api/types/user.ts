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
