export interface NoticeInterface {
  id: string
  type: NoticeType
  content: string
  createdAt: string
  isNew: boolean
  handler?: string
}

type NoticeType = 'ban' | 'friendRequest' | 'friendAccept' | 'commentOnPost' | 'commentOnComment' | 'hotPost'
