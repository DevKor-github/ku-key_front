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

export interface BoardInfo {
  id: number
  name: string
  description: string
}
export type BoardPostPreviewProps = Omit<PostPreviewProps, 'boardName'>
export type BoardType = 'Community Board' | 'Information Board' | 'Question Board'
