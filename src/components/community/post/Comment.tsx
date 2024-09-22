import { css } from '@styled-system/css'
import { reactionButton } from '@styled-system/recipes'
import { useAtomValue } from 'jotai'
import { Cookie, MessageCircle } from 'lucide-react'
import { memo, useCallback, useMemo } from 'react'

import { usePostCommentLike } from '@/api/hooks/community'
import CommentHeader from '@/components/community/post/CommentHeader'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { POST_MESSAGES } from '@/lib/messages/community'
import { postAtom } from '@/lib/store/post'
import { getCommentUsername } from '@/util/getCommentUsername'
import { isAuthorMatchingPostAnonymity } from '@/util/isAuthorMatchingPostAnonymity'
import { useModal } from '@/util/useModal'

interface CommentProps {
  isOpen: boolean
  currentIndex: number
  handleClick: () => void
}
const Comment = memo(({ isOpen, currentIndex, handleClick }: CommentProps) => {
  const post = useAtomValue(postAtom)
  const isPostAuthorAnonymous = post.user.isAnonymous
  const comment = post.comments[currentIndex]
  const { isOpen: modalOpen, handleOpen } = useModal(true)

  const { mutate: mutateLike } = usePostCommentLike()
  const handleLikeClick = useCallback(() => {
    if (comment.isMyComment) return handleOpen()
    mutateLike({ postId: post.id, commentId: comment.id, isReply: false })
  }, [comment.isMyComment, comment.id, handleOpen, mutateLike, post.id])

  const username = useMemo(
    () => getCommentUsername({ comment, isPostAuthorAnonymous }),
    [comment, isPostAuthorAnonymous],
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
      <CommentHeader
        username={username}
        date={comment.createdAt}
        isMyComment={comment.isMyComment}
        commentId={comment.id}
        isAuthorMatchingPostAnonymity={isAuthorMatchingPostAnonymity({
          isAuthor: comment.isAuthor,
          isPostAuthorAnonymous,
          isAnonymous: comment.user.isAnonymous,
        })}
        isDeleted={comment.isDeleted}
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
        {comment.content || 'This comment has been deleted.'}
      </p>

      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          visibility: comment.isDeleted ? 'hidden' : 'visible',
        })}
      >
        <button aria-pressed={isOpen} className={reactionButton()} onClick={handleClick}>
          <MessageCircle size={22} />
          <p>{comment.reply.length}</p>
        </button>
        <button aria-pressed={comment.myLike} className={reactionButton()} onClick={handleLikeClick}>
          <Cookie size={22} />
          <p>{comment.likeCount}</p>
        </button>
      </div>
      <NoticeModal content={POST_MESSAGES.NO_LIKE_OWN_COMMENT} isOpen={modalOpen} />
    </div>
  )
})

export default Comment
