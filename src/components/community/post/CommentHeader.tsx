import { css } from '@styled-system/css'
import { boardTag } from '@styled-system/recipes'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

import { useReportComment } from '@/api/hooks/community'
import UtilButton from '@/components/community/post/UtilButton'
import AlertModal from '@/components/ui/modal/AlertModal'
import { REPORT_MESSAGES } from '@/lib/messages/community'
import { getFormattedTimeString } from '@/util/getFormattedTimeString'
import { useModal } from '@/util/useModal'

interface CommentHeaderProps {
  username: string
  date: Date
  isMyComment: boolean
  commentId: number
}
const CommentHeader = ({ isMyComment, username, date, commentId }: CommentHeaderProps) => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()
  const { mutate: mutateReportComment } = useReportComment()
  const handleReportConfirm = useCallback(() => {
    mutateReportComment(
      { commentId, reason: 'Inappropriate' },
      {
        onSuccess: () => {
          handleButtonClose()
        },
        onError: error => {
          if (isAxiosError(error) && error.response?.data.message === REPORT_MESSAGES.REPORT_ERROR) {
            handleButtonClose()
            alert(REPORT_MESSAGES.REPORT_ERROR)
          }
        },
      },
    )
  }, [commentId, handleButtonClose, mutateReportComment])
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
        <div className={boardTag({ variant: isMyComment ? 'red' : 'small' })}>{isMyComment ? 'Author' : username}</div>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>{getFormattedTimeString(date)}</p>
      </div>
      <UtilButton isComment isMine={isMyComment} isEditable={false} handleReport={handleOpen} />
      <AlertModal
        modalRef={modalRef}
        title="Are you sure?"
        content={`Do you want to report this comment? ${'\n'} The report will not be processed ${'\n'}if the reason for reporting is inappropriate.`}
        closeText="Cancel"
        confirmText="Confirm"
        onConfirm={handleReportConfirm}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </div>
  )
}

export default CommentHeader
