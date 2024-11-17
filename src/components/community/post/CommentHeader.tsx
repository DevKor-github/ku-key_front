import { css } from '@styled-system/css'
import { boardTag } from '@styled-system/recipes'
import { User, UserPen } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useDeleteComment, useReportComment } from '@/api/hooks/community'
import UtilButton from '@/components/community/post/UtilButton'
import AlertModal from '@/components/ui/modal/AlertModal'
import { getFormattedTimeString } from '@/util/getFormattedTimeString'
import { useModal } from '@/util/hooks/useModal'

interface CommentHeaderProps {
  username: string
  date: Date
  isMyComment: boolean
  commentId: number
  isAuthorMatchingPostAnonymity?: boolean
  isDeleted: boolean
}
const CommentHeader = ({
  isMyComment,
  username,
  date,
  commentId,
  isAuthorMatchingPostAnonymity,
  isDeleted,
}: CommentHeaderProps) => {
  const [target, setTarget] = useState<'report' | 'delete'>()
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()
  const { mutate: mutateReportComment } = useReportComment()
  const { mutate: mutateDeleteComment } = useDeleteComment()
  const boardName = useLocation().pathname.split('/')[2]
  const handleTargetAndOpen = useCallback(
    (target: 'report' | 'delete') => {
      setTarget(target)
      handleOpen()
    },
    [handleOpen],
  )
  const handleReportConfirm = useCallback(() => {
    mutateReportComment(
      { commentId, reason: 'Inappropriate' },
      {
        onSettled: () => handleButtonClose(),
      },
    )
  }, [commentId, handleButtonClose, mutateReportComment])
  const handleDelete = useCallback(
    () => mutateDeleteComment(commentId, { onSuccess: handleButtonClose }),
    [commentId, handleButtonClose, mutateDeleteComment],
  )
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
      })}
    >
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
        <div className={boardTag({ variant: isAuthorMatchingPostAnonymity ? 'red' : 'small' })}>
          {isAuthorMatchingPostAnonymity ? (
            <UserPen size={16} />
          ) : (
            isMyComment && !isAuthorMatchingPostAnonymity && <User size={16} />
          )}
          {username}
        </div>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>{getFormattedTimeString(date)}</p>
      </div>
      {!isDeleted && (
        <UtilButton
          isComment
          isMine={isMyComment}
          isEditable={false}
          isDeletable={isMyComment && boardName !== 'question'}
          handleReport={() => handleTargetAndOpen('report')}
          handleDelete={() => handleTargetAndOpen('delete')}
          disabled={isDeleted || (isMyComment && boardName === 'question')}
        />
      )}
      <AlertModal
        modalRef={modalRef}
        title="Are you sure?"
        content={
          target === 'delete'
            ? 'Do you want to delete this comment?'
            : `Do you want to report this comment? ${'\n'} The report will not be processed ${'\n'}if the reason for reporting is inappropriate.`
        }
        closeText="Cancel"
        confirmText="Confirm"
        onConfirm={target === 'delete' ? handleDelete : handleReportConfirm}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </div>
  )
}

export default CommentHeader
