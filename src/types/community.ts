export interface PostPreviewProps {
  id: number
  title: string
  content: string
  createdAt: Date
  username: string
  commentCount: number
  scrapCount: number
  thumbnailDir: string | null
  reaction: Reaction
  boardName: string
}

export interface Reaction {
  good: number
  sad: number
  amazing: number
  angry: number
  funny: number
}

export type ReactionType = keyof Reaction
export interface BoardInfo {
  id: number
  name: string
  description: string
}
export type BoardPostPreviewProps = Omit<PostPreviewProps, 'boardName'>
export type BoardType = 'Community Board' | 'Information Board' | 'Question Board'

export interface CommentProps {
  id: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  isMyComment: boolean
  content: string
  username: string
  likeCount: number
  reply: string[]
}
export interface ImageProps {
  id: number
  imgDir: string
}
export interface PostViewProps {
  id: number
  isMyPost: boolean
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  username: string
  views: number
  scrapCount: number
  reaction: Reaction
  comments: CommentProps[]
  imageDirs: ImageProps[]
}
