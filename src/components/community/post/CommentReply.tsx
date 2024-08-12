import { css } from '@styled-stytem/css'
import { reactionButton } from '@styled-stytem/recipes'
import { Cookie, Forward } from 'lucide-react'

import CommentHeader from '@/components/community/post/CommentHeader'

const CommentReply = () => {
  return (
    <div className={css({ display: 'flex', w: 'full', maxW: 756, alignItems: 'flex-start', gap: 5 })}>
      <Forward className={css({ color: 'darkGray.2', transform: 'scale(1,-1)' })} size={24} />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
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
          Lorem ipsum dolor sit amet consectetur. Luctus venenatis ac amet volutpat magna cum. Lorem ipsum dolor sit
          amet consectetur. Luctus venenatis ac amet volutpat magna cum.
        </p>
        <button className={reactionButton()}>
          <Cookie size={22} />
          <p>1</p>
        </button>
      </div>
    </div>
  )
}

export default CommentReply
