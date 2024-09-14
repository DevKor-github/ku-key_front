import { css } from '@styled-system/css'
import { boardTag, reactionButton } from '@styled-system/recipes'
import { Cookie, MessageCircle } from 'lucide-react'
import { useCallback } from 'react'

import UtilButton from '@/components/community/post/UtilButton'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { POST_MESSAGES } from '@/lib/messages/community'
import { MyCommentProps } from '@/types/community'
import { getFormattedTimeString } from '@/util/getFormattedTimeString'
import { useModal } from '@/util/useModal'

interface CommentCardProps {
  comment: MyCommentProps
}
const CommentCard = ({ comment }: CommentCardProps) => {
  const { isOpen: modalOpen, handleOpen } = useModal(true)

  const handleNavigate = useCallback(() => {
    window.open(`/community/community/post/${comment.postId}`, '_blank')
  }, [comment.postId])

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
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
          <div className={boardTag({ variant: 'red' })}>{comment.isAnonymous ? 'Anonymous' : 'Author'}</div>
          <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>
            {getFormattedTimeString(comment.createdAt)}
          </p>
        </div>
        <UtilButton isComment isMine={true} isEditable={false} forMyPage handleNavigation={handleNavigate} />
      </div>
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
        <button className={reactionButton()} onClick={handleNavigate}>
          <MessageCircle size={22} />
          <p>{comment.replyCount}</p>
        </button>
        <button aria-pressed={false} className={reactionButton()} onClick={handleOpen}>
          <Cookie size={22} />
          <p>{comment.likeCount}</p>
        </button>
      </div>
      <NoticeModal content={POST_MESSAGES.NO_LIKE_OWN_COMMENT} isOpen={modalOpen} />
    </div>
  )
}

export default CommentCard
