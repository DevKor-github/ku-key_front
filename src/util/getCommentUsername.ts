import { CommentProps } from '@/types/community'

interface CommentUsernameProps {
  comment: CommentProps
  isPostAuthorAnonymous: boolean
}
export const getCommentUsername = ({ comment, isPostAuthorAnonymous }: CommentUsernameProps) => {
  if (comment.isDeleted) return 'Unknown'
  if (comment.isAuthor && isPostAuthorAnonymous && comment.user.isAnonymous) return 'Anonymous'
  return comment.user.username
}
