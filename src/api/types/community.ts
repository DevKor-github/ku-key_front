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
