import { css, RecipeVariantProps } from '@styled-stytem/css'
import { postPreview } from '@styled-stytem/recipes'
import { formatDistanceToNow } from 'date-fns'

import ProfileImg from '@/assets/ProfileImg.jpg'
import { PostPreviewProps } from '@/types/community'

interface PostTextPreviewProps extends Pick<PostPreviewProps, 'title' | 'username' | 'createdAt'> {
  variant: RecipeVariantProps<typeof postPreview>
  description?: string
}
const PostTextPreview = ({ title, username, createdAt, variant, description }: PostTextPreviewProps) => {
  const onlyTitle = variant?.variant === 'onlyTitle'

  const timeDistance = formatDistanceToNow(createdAt)
  return (
    <div className={postPreview(variant)}>
      <img
        src={ProfileImg}
        alt="Profile"
        className={css({ w: onlyTitle ? 15 : 20, h: onlyTitle ? 15 : 20, rounded: 'full' })}
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
            <p>{username}</p>
            <p>{timeDistance} ago</p>
          </div>
          <h3
            className={css({
              w: 'full',
              fontSize: 20,
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.4px',
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
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            })}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostTextPreview
