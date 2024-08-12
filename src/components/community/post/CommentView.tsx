import { css } from '@styled-stytem/css'

import Comment from '@/components/community/post/Comment'
import CommentInput from '@/components/community/post/CommentInput'
import CommentReply from '@/components/community/post/CommentReply'

const CommentView = () => {
  return (
    <section
      className={css({ display: 'flex', w: 'full', flexDir: 'column', pb: 200, alignItems: 'flex-start', gap: '50px' })}
    >
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
          <Comment />
          <CommentReply />
        </div>
      </div>
      <CommentInput />
    </section>
  )
}

export default CommentView
