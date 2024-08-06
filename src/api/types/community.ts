import { BoardInfo, BoardPostPreviewProps, PostPreviewProps } from '@/types/community'

export interface PostPreviewResponse {
  posts: PostPreviewProps[]
}

export interface PostByBoardResponse {
  board: BoardInfo
  posts: BoardPostPreviewProps[]
}
