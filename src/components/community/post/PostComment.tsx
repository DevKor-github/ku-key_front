import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { SendHorizonal } from 'lucide-react'
import { useCallback, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
const PostComment = () => {
  const [comment, setComment] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        console.log(comment)
      }
    },
    [comment],
  )
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])
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
        <TextareaAutosize
          maxRows={3}
          form="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
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
          onClick={() => console.log(comment)}
        >
          <SendHorizonal />
        </button>
      </label>
      <button aria-pressed={anonymous} className={reactionButton()} onClick={handleAnonymous}>
        Anonymous
      </button>
    </div>
  )
}

export default PostComment
