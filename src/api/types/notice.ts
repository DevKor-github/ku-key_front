export interface GetNoticeResponse {
  data: {
    id: number
    content: string
    createdAt: string
  }[]
  meta: {
    hasNextData: boolean
    nextCursor: string
  }
}
