import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { useAtom } from 'jotai'
import { Cookie, MessageCircle } from 'lucide-react'
import { memo, useCallback } from 'react'

import CommentHeader from '@/components/community/post/CommentHeader'
import { isInputOpenAtom } from '@/lib/store/comment'

const Comment = memo(() => {
  const [openInput, setOpenInput] = useAtom(isInputOpenAtom)
  const handleClick = useCallback(() => setOpenInput(prev => !prev), [setOpenInput])
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-end',
        gap: 2.5,
        alignSelf: 'stretch',
      })}
    >
      <CommentHeader />
      <p
        className={css({
          display: 'flex',
          alignSelf: 'stretch',
          whiteSpace: 'pre-wrap',
          textStyle: 'heading4_M',
          color: 'darkGray.1',
          smDown: { fontSize: 14 },
        })}
      >
        Lorem ipsum dolor sit amet consectetur. Luctus venenatis ac amet volutpat magna cum. Lorem ipsum dolor sit amet
        consectetur. Luctus venenatis ac amet volutpat magna cum.
      </p>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
        <button aria-pressed={openInput} className={reactionButton()} onClick={handleClick}>
          <MessageCircle size={22} />
          <p>1</p>
        </button>
        <button className={reactionButton()}>
          <Cookie size={22} />
          <p>1</p>
        </button>
      </div>
    </div>
  )
})

export default Comment
