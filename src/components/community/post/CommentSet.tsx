import { css } from '@styled-system/css'
import { useAtomValue } from 'jotai'
import { useCallback, useState } from 'react'

import Comment from '@/components/community/post/Comment'
import CommentInput from '@/components/community/post/CommentInput'
import CommentReply from '@/components/community/post/CommentReply'
import { postAtom } from '@/lib/store/post'

interface CommentSetProps {
  index: number
}
const CommentSet = ({ index }: CommentSetProps) => {
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => setOpen(prev => !prev), [])
  const comment = useAtomValue(postAtom).comments[index]
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: '50px',
        alignSelf: 'stretch',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-end',
          gap: 2.5,
          alignSelf: 'stretch',
        })}
      >
        <Comment currentIndex={index} isOpen={open} handleClick={handleClick} />
        {comment.reply.map(reply => (
          <CommentReply key={reply.id} reply={reply} parentId={comment.id} />
        ))}
      </div>
      <CommentInput currentIndex={index} isOpen={open} />
    </div>
  )
}

export default CommentSet
