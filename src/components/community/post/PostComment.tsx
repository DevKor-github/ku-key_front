import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai'
import { SendHorizonal } from 'lucide-react'
import { memo, useCallback, useState } from 'react'

import { usePostComment } from '@/api/hooks/community'
import { Checkbox } from '@/components/ui/checkbox'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { postAtom } from '@/lib/store/post'
import { useTextArea } from '@/util/useTextArea'

const PostComment = memo(() => {
  const { value, onChange, clear } = useTextArea('')
  const [anonymous, setAnonymous] = useState(false)
  const [isKeyDown, setIsKeyDown] = useState(false)
  const { mutate: mutateComment } = usePostComment()
  const postAtomData = useAtomValue(postAtom)

  const handleSubmitClick = useCallback(() => {
    if (value.trim() === '') return alert('Please enter a comment')
    mutateComment({ postId: postAtomData.id, content: value, isAnonymous: anonymous }, { onSuccess: clear })
  }, [value, mutateComment, postAtomData.id, anonymous, clear])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault()
        if (!isKeyDown) {
          setIsKeyDown(true)
          handleSubmitClick()
        }
      }
    },
    [handleSubmitClick, isKeyDown],
  )
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])
  const handleKeyUp = useCallback(() => setIsKeyDown(false), [])
  return (
    <label
      htmlFor="comment"
      className={css({
        display: 'flex',
        px: 5,
        h: 'auto',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        py: '13px',
        alignSelf: 'stretch',
        rounded: 10,
        border: '1px solid {colors.lightGray.1}',
        bgColor: 'bg.gray',
        resize: 'none',
        gap: 4,
      })}
    >
      <span hidden>send</span>
      <MemoizedTextAreaAutosize
        value={value}
        onChange={onChange}
        maxRows={3}
        form="comment"
        placeholder="Add a comment..."
        className={css({
          display: 'flex',
          w: 'full',
          alignSelf: 'stretch',
          border: 'none',
          resize: 'none',
          outline: 'none',
          textStyle: 'heading4_M',
          color: 'darkGray.1',
          _placeholder: { textStyle: 'heading4_M', color: 'lightGray.1' },
        })}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
      <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 1.5 })}>
          <Checkbox checked={anonymous} onCheckedChange={handleAnonymous} />
          <p className={css({ textStyle: 'heading4_M', color: 'darkGray.2' })}>Anonymous</p>
        </div>
        <button
          type="button"
          className={css({ display: 'flex', color: 'lightGray.1', cursor: 'pointer' })}
          onClick={handleSubmitClick}
        >
          <SendHorizonal style={{ color: value ? '#6B6B6B' : 'lightGray.1' }} />
        </button>
      </div>
    </label>
  )
})

export default PostComment
