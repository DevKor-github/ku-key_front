import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { Link } from 'react-router-dom'

import { MyCommentProps } from '@/types/community'
import { getFormattedTimeString } from '@/util/getFormattedTimeString'

interface CommentCardProps {
  comment: MyCommentProps
}
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Link to={`/community/community/post/${comment.postId}`}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-end',
          gap: '18px',
          alignSelf: 'stretch',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: 2.5,
          })}
        >
          <div
            className={cx(
              css({
                px: 2.5,
                py: 1,
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'darkGray.2',
                rounded: 'full',
                bgColor: 'white',
              }),
              shadow(),
            )}
          >
            {comment.isAnonymous ? 'Anonymous' : 'Me'}
          </div>
          <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.2' })}>
            {getFormattedTimeString(comment.createdAt)}
          </p>
        </div>
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
          {comment.content}
        </p>
      </div>
    </Link>
  )
}

export default CommentCard
