import { css } from '@styled-stytem/css'
import { boardTag } from '@styled-stytem/recipes'

import UtilButton from '@/components/community/post/UtilButton'
import { getFormatedTimeString } from '@/util/getFormatedTimeString'

interface CommentHeaderProps {
  username: string
  date: Date
  isMyComment: boolean
}
const CommentHeader = ({ isMyComment, username, date }: CommentHeaderProps) => {
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
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>{getFormatedTimeString(date)}</p>
      </div>
      <UtilButton isMine={isMyComment} isEditable={false} />
    </div>
  )
}

export default CommentHeader
