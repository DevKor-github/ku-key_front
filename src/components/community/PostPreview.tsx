import { css } from '@styled-stytem/css'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTag from '@/components/community/PreviewTag'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'
import { BoardType, PostPreviewProps } from '@/types/community'

const PostPreview = memo(
  ({
    id,
    title,
    content,
    createdAt,
    username,
    thumbnailDir,
    boardName,
  }: Omit<PostPreviewProps, 'commentCount' | 'reaction' | 'scrapCount'>) => {
    const navigate = useNavigate()
    const handleNavigate = useCallback(() => navigate(`/community/post/${id}`), [navigate, id])
    return (
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
        <PreviewTextWrapper>
          <PreviewTag boardName={boardName as BoardType} />
          <PostTextPreview
            title={title}
            createdAt={createdAt}
            username={username}
            variant={{ variant: 'default' }}
            description={content}
            handleNavigate={handleNavigate}
          />
        </PreviewTextWrapper>
        {thumbnailDir && (
          <img
            src={thumbnailDir}
            alt="Post"
            className={css({
              w: 'full',
              h: 254,
              rounded: 20,
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            })}
            style={{ objectFit: 'cover', backgroundPosition: 'top' }}
          />
        )}
      </div>
    )
  },
)

export default PostPreview
