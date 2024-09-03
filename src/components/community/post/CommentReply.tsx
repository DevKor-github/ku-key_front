import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { Cookie, Forward } from 'lucide-react'
import { useCallback } from 'react'

import { usePostCommentLike } from '@/api/hooks/community'
import CommentHeader from '@/components/community/post/CommentHeader'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { POST_MEESSAGES } from '@/lib/messages/community'
import { postAtom } from '@/lib/store/post'
import { CommentProps } from '@/types/community'
import { useModal } from '@/util/useModal'

interface CommentReplyProps {
  reply: Omit<CommentProps, 'reply'>
  parentId: number
}
const CommentReply = ({ reply, parentId }: CommentReplyProps) => {
  const post = useAtomValue(postAtom)
  const { mutate: mutateLike } = usePostCommentLike()
  const { isOpen, handleOpen } = useModal(true)
  const handleLikeClick = useCallback(() => {
    if (reply.isMyComment) return handleOpen()
    mutateLike({ postId: post.id, commentId: reply.id, parentCommentId: parentId, isReply: true })
  }, [handleOpen, mutateLike, parentId, post.id, reply.id, reply.isMyComment])
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
          username={reply.user.isAnonymous ? 'Anonymous' : reply.user.username}
          date={reply.createdAt}
          isMyComment={reply.isMyComment}
          commentId={reply.id}
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
          {reply.content}
        </p>
        <button aria-pressed={reply.myLike} className={reactionButton()} onClick={handleLikeClick}>
          <Cookie size={22} />
          <p>{reply.likeCount}</p>
        </button>
      </div>
      <NoticeModal content={POST_MEESSAGES.NO_LIKE_OWN_COMMENT} isOpen={isOpen} />
    </div>
  )
}

export default CommentReply
