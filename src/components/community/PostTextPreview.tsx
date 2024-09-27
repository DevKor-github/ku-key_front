import { css } from '@styled-system/css'
import { postTextPreview, PostTextPreviewVariant } from '@styled-system/recipes'
import { formatDistanceToNow } from 'date-fns'

import Profile from '@/components/ui/profile'
import { PostPreviewProps } from '@/types/community'

interface PostTextPreviewProps extends Pick<PostPreviewProps, 'title' | 'user' | 'createdAt'> {
  variant: PostTextPreviewVariant['variant']
  description?: string
  handleNavigate?: () => void
}
const PostTextPreview = ({ title, user, createdAt, variant, description, handleNavigate }: PostTextPreviewProps) => {
  const onlyTitle = variant === 'onlyTitle'

  const timeDistance = formatDistanceToNow(createdAt)
  return (
    <button className={postTextPreview({ variant })} onClick={handleNavigate}>
      <Profile
        isAnonymous={user.isAnonymous}
        isDeleted={user.isDeleted}
        character={user.character}
        onlyTitle={onlyTitle}
      />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 2.5,
          w: onlyTitle ? 279 : 458,
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'flex-start',
            gap: 1,
            alignSelf: 'stretch',
          })}
        >
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch',
              fontSize: 12,
              fontWeight: 700,
              color: 'darkGray.2',
            })}
          >
            <p>{user.isAnonymous ? 'Anonymous' : user.username}</p>
            <p>{timeDistance} ago</p>
          </div>
          <h3
            className={css({
              w: 'full',
              fontSize: 20,
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.4px',
              overflow: 'hidden',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {title}
          </h3>
        </div>
        {!onlyTitle && (
          <div
            className={css({
              w: 'full',
              fontSize: 16,
              fontWeight: 400,
              color: 'darkGray.2',
              overflow: 'hidden',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {description}
          </div>
        )}
      </div>
    </button>
  )
}

export default PostTextPreview
