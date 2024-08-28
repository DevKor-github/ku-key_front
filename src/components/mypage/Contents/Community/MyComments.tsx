import { css } from '@styled-stytem/css'

import { useGetMyComments } from '@/api/hooks/community'
import CommentCard from '@/components/mypage/Contents/Community/CommentCard'

const MyComments = () => {
  const { data: comments } = useGetMyComments()

  return (
    <section className={css({ display: 'flex', w: 800, flexDir: 'column', pb: 200, alignItems: 'flex-start', gap: 5 })}>
      {comments !== undefined &&
        comments.map((comment, index) => {
          return (
            <>
              {index !== 0 && <div className={css({ h: 0.25, bgColor: 'lightGray.1', w: 'full' })} />}
              <CommentCard key={index} comment={comment} />
            </>
          )
        })}
    </section>
  )
}

export default MyComments
