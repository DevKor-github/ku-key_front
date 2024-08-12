import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { SendHorizonal } from 'lucide-react'

import { MemoizedTextAreaAutosize } from '@/components/ui/textarea-autosize'
import { isInputOpenAtom } from '@/lib/store/comment'

const CommentInput = () => {
  const isOpen = useAtomValue(isInputOpenAtom)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="comment-input"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'flex-end',
            gap: 2.5,
            alignSelf: 'stretch',
          })}
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
              placeholder="Add a comment..."
              className={css({
                display: 'flex',
                w: 'full',
                alignSelf: 'stretch',
                border: 'none',
                resize: 'none',
                py: '11px',
                outline: 'none',
              })}
            />
            <button type="button" className={css({ display: 'flex', color: 'lightGray.1', cursor: 'pointer' })}>
              <SendHorizonal />
            </button>
          </label>
          <button aria-pressed={false} className={reactionButton()}>
            Anonymous
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default CommentInput
