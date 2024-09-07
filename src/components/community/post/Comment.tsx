import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { Cookie, MessageCircle } from 'lucide-react'
import { memo, useCallback, useMemo } from 'react'

import { usePostCommentLike } from '@/api/hooks/community'
import CommentHeader from '@/components/community/post/CommentHeader'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { POST_MEESSAGES } from '@/lib/messages/community'
import { postAtom } from '@/lib/store/post'
import { useModal } from '@/util/useModal'

interface CommentProps {
  isOpen: boolean
  currnetIndex: number
  handleClick: () => void
}
const Comment = memo(({ isOpen, currnetIndex, handleClick }: CommentProps) => {
  const post = useAtomValue(postAtom)
  const comment = post.comments[currnetIndex]
  const { isOpen: modalOpen, handleOpen } = useModal(true)

  const { mutate: mutateLike } = usePostCommentLike()
  const handleLikeClick = useCallback(() => {
    if (comment.isMyComment) return handleOpen()
    mutateLike({ postId: post.id, commentId: comment.id, isReply: false })
  }, [comment.isMyComment, comment.id, handleOpen, mutateLike, post.id])

  const username = useMemo(() => {
    if (comment.isDeleted) return 'Unknown'
    return comment.user.isAnonymous ? 'Anonymous' : comment.user.username
  }, [comment.isDeleted, comment.user.isAnonymous, comment.user.username])
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
      <CommentHeader
        username={username}
        date={comment.createdAt}
        isMyComment={comment.isMyComment}
        commentId={comment.id}
      />
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
      <NoticeModal content={POST_MEESSAGES.NO_LIKE_OWN_COMMENT} isOpen={modalOpen} />
    </div>
  )
})

export default Comment
