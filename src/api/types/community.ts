import { BoardInfo, BoardPostPreviewProps, PostPreviewByBoardMeta, PostPreviewProps, User } from '@/types/community'

export interface PostPreviewResponse {
  data: PostPreviewProps[]
  meta: PostPreviewByBoardMeta
}

export interface PostByBoardResponse {
  board: BoardInfo
  data: BoardPostPreviewProps[]
  meta: PostPreviewByBoardMeta
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
  user: User
  likeCount: number
  myLike: boolean
}

export interface PostCommentLikeRequest {
  postId: number
  commentId: number
  isReply: boolean
  parentCommentId?: number
}

export interface PostCreateRequest {
  boardId: number
  title: string
  content: string
  isAnonymous: boolean
  images?: File[]
}
