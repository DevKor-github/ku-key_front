import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtomValue } from 'jotai'
import { SendHorizonal } from 'lucide-react'
import { memo, useCallback, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { usePostComment } from '@/api/hooks/community'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { postAtom } from '@/lib/store/post'
import { useTextArea } from '@/util/useTextArea'

const PostComment = memo(() => {
  const { value, onChange } = useTextArea('')
  const [anonymous, setAnonymous] = useState(false)
  const { mutate: mutateComment } = usePostComment()
  const postAtomData = useAtomValue(postAtom)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        mutateComment({ postId: postAtomData.id, content: value, isAnonymous: anonymous })
      }
    },
    [anonymous, value, mutateComment, postAtomData.id],
  )
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])
  const handleSubmitClick = useCallback(
    () => mutateComment({ postId: postAtomData.id, content: value, isAnonymous: anonymous }),
    [anonymous, value, mutateComment, postAtomData.id],
  )

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
          maxRows={3}
          form="comment"
          value={value}
          onChange={onChange}
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
