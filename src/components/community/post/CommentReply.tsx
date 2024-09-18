import { css } from '@styled-system/css'
import { reactionButton } from '@styled-system/recipes'
import { useAtomValue } from 'jotai'
import { Cookie, Forward } from 'lucide-react'
import { useCallback, useMemo } from 'react'

import { usePostCommentLike } from '@/api/hooks/community'
import CommentHeader from '@/components/community/post/CommentHeader'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { POST_MESSAGES } from '@/lib/messages/community'
import { postAtom } from '@/lib/store/post'
import { CommentProps } from '@/types/community'
import { getCommentUsername } from '@/util/getCommentUsername'
import { isAuthorMatchingPostAnonymity } from '@/util/isAuthorMatchingPostAnonymity'
import { useModal } from '@/util/useModal'

interface CommentReplyProps {
  reply: Omit<CommentProps, 'reply'>
  parentId: number
}
const CommentReply = ({ reply, parentId }: CommentReplyProps) => {
  const post = useAtomValue(postAtom)
  const isPostAuthorAnonymous = post.user.isAnonymous
  const { mutate: mutateLike } = usePostCommentLike()
  const { isOpen, handleOpen } = useModal(true)
  const handleLikeClick = useCallback(() => {
    if (reply.isMyComment) return handleOpen()
    mutateLike({ postId: post.id, commentId: reply.id, parentCommentId: parentId, isReply: true })
  }, [handleOpen, mutateLike, parentId, post.id, reply.id, reply.isMyComment])

  const username = useMemo(
    () => getCommentUsername({ comment: reply as CommentProps, isPostAuthorAnonymous }),
    [reply, isPostAuthorAnonymous],
  )
  return (
    <div className={css({ display: 'flex', w: 'full', maxW: 756, alignItems: 'flex-start', gap: 5 })}>
      <Forward className={css({ color: 'darkGray.2', transform: 'scale(1,-1)' })} size={24} />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
          alignItems: 'flex-end',
          gap: 2.5,
          alignSelf: 'stretch',
        })}
      >
        <CommentHeader
          username={username}
          date={reply.createdAt}
          isMyComment={reply.isMyComment}
          commentId={reply.id}
          isAuthorMatchingPostAnonymity={isAuthorMatchingPostAnonymity({
            isAuthor: reply.isAuthor,
            isPostAuthorAnonymous,
            isAnonymous: reply.user.isAnonymous,
          })}
          isDeleted={reply.isDeleted}
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
          {reply.content || 'This comment has been deleted.'}
        </p>
        {!reply.isDeleted && (
          <button aria-pressed={reply.myLike} className={reactionButton()} onClick={handleLikeClick}>
            <Cookie size={22} />
            <p>{reply.likeCount}</p>
          </button>
        )}
      </div>
      <NoticeModal content={POST_MESSAGES.NO_LIKE_OWN_COMMENT} isOpen={isOpen} />
    </div>
  )
}

export default CommentReply
