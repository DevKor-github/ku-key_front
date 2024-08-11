import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { SendHorizonal } from 'lucide-react'
import { memo, useCallback, useRef, useState } from 'react'

import { usePostComment } from '@/api/hooks/community'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { postAtom } from '@/lib/store/post'

const PostComment = memo(() => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  const [anonymous, setAnonymous] = useState(false)
  const { mutate: mutateComment } = usePostComment()
  const postAtomData = useAtomValue(postAtom)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && textRef.current) {
        e.preventDefault()
        mutateComment({ postId: postAtomData.id, content: textRef.current.value, isAnonymous: anonymous })
      }
    },
    [anonymous, mutateComment, postAtomData.id],
  )
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])
  const handleSubmitClick = useCallback(() => {
    if (textRef.current) {
      mutateComment({ postId: postAtomData.id, content: textRef.current.value, isAnonymous: anonymous })
    }
  }, [anonymous, mutateComment, postAtomData.id])

  return (
    <div
      className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end', gap: 2.5, alignSelf: 'stretch' })}
    >
      <label
        htmlFor="comment"
        className={css({
          display: 'flex',
          px: 5,
          h: 'auto',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          rounded: 10,
          border: '1px solid {colors.lightGray.1}',
          bgColor: 'bg.gray',
          _placeholder: { fontSize: 18, fontWeight: 500, color: 'lightGray.1' },
          resize: 'none',
          _focus: { outlineColor: 'darkGray.2' },
          gap: 4,
        })}
      >
        <span hidden>send</span>
        <MemoizedTextAreaAutosize
          ref={textRef}
          maxRows={3}
          form="comment"
          placeholder="Add a comment..."
          className={css({
            display: 'flex',
            w: 'full',
            alignSelf: 'stretch',
            border: 'none',
            resize: 'none',
            py: '13px',
            outline: 'none',
          })}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={css({ display: 'flex', color: 'lightGray.1', cursor: 'pointer' })}
          onClick={handleSubmitClick}
        >
          <SendHorizonal />
        </button>
      </label>
      <button aria-pressed={anonymous} className={reactionButton()} onClick={handleAnonymous}>
        Anonymous
      </button>
    </div>
  )
})

export default PostComment
