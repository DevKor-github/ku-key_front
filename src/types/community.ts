export interface PostPreviewProps {
  id: number
  title: string
  content: string
  createdAt: Date
  myScrap: boolean
  views: number
  reactionCount: number
  user: User
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

export interface PostPreviewByBoardMeta {
  hasNextData: boolean
  nextCursor: number
}
export type BoardPostPreviewProps = Omit<PostPreviewProps, 'reaction'>
export type BoardType = 'Community Board' | 'Information Board' | 'Question Board'

export interface CommentProps {
  id: number
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  isMyComment: boolean
  content: string
  user: User
  likeCount: number
  myLike: boolean
  reply: Omit<CommentProps, 'reply'>[]
}

export interface MyCommentProps {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  likeCount: number
  isAnonymouse: boolean
  postId: number
  replyCount: number
}

export interface ImageProps {
  id: number
  imgDir: string
}

export interface User {
  username: string
  profileImgUrl: string
  isAnonymous: boolean
  isDeleted: boolean
}
export interface PostViewProps {
  id: number
  isMyPost: boolean
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  user: User
  views: number
  scrapCount: number
  myScrap: boolean
  reactionCount: Reaction
  myReaction?: number
  comments: CommentProps[]
  imageDirs: ImageProps[]
}
