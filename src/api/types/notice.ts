import { NoticeType } from '@/types/notice'

export interface GetNoticeResponse {
  data: NoticeType[]
  meta: {
    hasNextData: boolean
    nextCursor: string
  }
}
