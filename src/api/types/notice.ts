import { NoticeInterface } from '@/types/notice'

export interface GetNoticeResponse {
  data: NoticeInterface[]
  meta: {
    hasNextData: boolean
    nextCursor: string
  }
}
