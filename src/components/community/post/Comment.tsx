import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { Cookie, MessageCircle } from 'lucide-react'
import { memo, useCallback } from 'react'

import { usePostCommentLike } from '@/api/hooks/community'
import CommentHeader from '@/components/community/post/CommentHeader'
import { postAtom } from '@/lib/store/post'

interface CommentProps {
  isOpen: boolean
  currnetIndex: number
  handleClick: () => void
}
const Comment = memo(({ isOpen, currnetIndex, handleClick }: CommentProps) => {
  const post = useAtomValue(postAtom)
  const comment = post.comments[currnetIndex]

  const { mutate: mutateLike } = usePostCommentLike()
  const handleLikeClick = useCallback(
    () => mutateLike({ postId: post.id, commentId: comment.id, isReply: false }),
    [mutateLike, post.id, comment.id],
  )
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-end',
        gap: 2.5,
        alignSelf: 'stretch',
      })}
    >
      <CommentHeader username={comment.user.username} date={comment.createdAt} isMyComment={comment.isMyComment} />
      <p
        className={css({
          display: 'flex',
          alignSelf: 'stretch',
          whiteSpace: 'pre-wrap',
          textStyle: 'heading4_M',
          color: 'darkGray.1',
          smDown: { fontSize: 14 },
        })}
      >
        {comment.content}
      </p>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
        <button aria-pressed={isOpen} className={reactionButton()} onClick={handleClick}>
          <MessageCircle size={22} />
          <p>{comment.reply.length}</p>
        </button>
        <button aria-pressed={comment.myLike} className={reactionButton()} onClick={handleLikeClick}>
          <Cookie size={22} />
          <p>{comment.likeCount}</p>
        </button>
      </div>
    </div>
  )
})

export default Comment
