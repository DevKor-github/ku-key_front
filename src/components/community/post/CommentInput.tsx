import { css } from '@styled-stytem/css'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { Forward, SendHorizonal } from 'lucide-react'
import { useCallback, useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { isInputOpenAtom } from '@/lib/store/comment'
import { useTextArea } from '@/util/useTextArea'

const CommentInput = () => {
  const isOpen = useAtomValue(isInputOpenAtom)
  const { value, onChange } = useTextArea('')
  const [anonymous, setAnonymous] = useState(false)
  const handleAnonymous = useCallback(() => setAnonymous(prev => !prev), [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.label
          key="comment-input"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          htmlFor="comment"
          className={css({
            display: 'flex',
            px: 5,
            h: 'auto',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            w: 'full',
            py: '13px',
            alignSelf: 'flex-end',
            rounded: 10,
            border: '1px solid {colors.darkGray.2}',
            resize: 'none',
            gap: 4,
            maxW: 756,
          })}
        >
          <span hidden>send</span>
          <div>
            <Forward className={css({ color: 'darkGray.2', transform: 'scale(1,-1)' })} size={24} />
          </div>
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
          />
          <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
            <div className={css({ display: 'flex', alignItems: 'center', gap: 1.5 })}>
              <Checkbox checked={anonymous} onCheckedChange={handleAnonymous} />
              <p className={css({ textStyle: 'heading4_M', color: 'darkGray.2' })}>Anonymous</p>
            </div>
            <button type="button" className={css({ display: 'flex', color: 'darkGray.2', cursor: 'pointer' })}>
              <SendHorizonal style={{ color: value ? '#6B6B6B' : 'inherit' }} />
            </button>
          </div>
        </motion.label>
      )}
    </AnimatePresence>
  )
}
export default CommentInput
