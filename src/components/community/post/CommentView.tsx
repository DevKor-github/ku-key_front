import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai'

import CommentSet from '@/components/community/post/CommentSet'
import { postAtom } from '@/lib/store/post'

const CommentView = () => {
  const comments = useAtomValue(postAtom).comments
  return (
    <section
      className={css({ display: 'flex', w: 'full', flexDir: 'column', pb: 200, alignItems: 'flex-start', gap: '50px' })}
    >
      {comments.map((comment, index) => (
        <CommentSet key={comment.id} index={index} />
      ))}
    </section>
  )
}

export default CommentView
