import { css } from '@styled-system/css'
import { Fragment } from 'react/jsx-runtime'

import { useGetMyComments } from '@/api/hooks/community'
import CommentCard from '@/components/mypage/Contents/Community/CommentCard'

const MyComments = () => {
  const { data: comments } = useGetMyComments()

  return (
    <section
      className={css({
        display: 'flex',
        w: { base: 800, mdDown: 320, smDown: 'full' },
        flexDir: 'column',
        pb: 200,
        alignItems: 'stretch',
        gap: 5,
      })}
    >
      {comments !== undefined &&
        comments.map((comment, index) => {
          return (
            <Fragment key={index}>
              {index !== 0 && <div className={css({ h: 0.25, bgColor: 'lightGray.1', w: 'full' })} />}
              <CommentCard comment={comment} />
            </Fragment>
          )
        })}
    </section>
  )
}

export default MyComments
