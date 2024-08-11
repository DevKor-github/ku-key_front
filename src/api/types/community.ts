import { BoardInfo, BoardPostPreviewProps, PostPreviewProps } from '@/types/community'

export interface PostPreviewResponse {
  posts: PostPreviewProps[]
}

export interface PostByBoardResponse {
  board: BoardInfo
  posts: BoardPostPreviewProps[]
}

export interface PostReactionRequest {
  postId: number
  reaction: number
}

export interface PostReactionResponse {
  isReacted: number
}

export interface PostScrapResponse {
  isScrapped: boolean
}

export interface PostCommentRequest {
  postId: number
  parentCommentId?: number
  content: string
  isAnonymous: boolean
}

export interface PostCommentResponse {
  id: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  isMyComment: boolean
  content: string
  username: string
  likeCount: number
}
