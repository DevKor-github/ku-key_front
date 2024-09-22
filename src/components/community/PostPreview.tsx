import { css } from '@styled-system/css'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import BoardTag from '@/components/community/Boards/BoardTag'
import PostTextPreview from '@/components/community/PostTextPreview'
import PreviewTextWrapper from '@/components/community/PreviewTextWrapper'
import { BoardType, PostPreviewProps } from '@/types/community'

const PostPreview = memo(
  ({
    id,
    title,
    content,
    createdAt,
    user,
    thumbnailDir,
    boardName,
  }: Omit<PostPreviewProps, 'commentCount' | 'reaction' | 'scrapCount' | 'myScrap' | 'views' | 'reactionCount'>) => {
    const navigate = useNavigate()
    const handleNavigate = useCallback(
      () => navigate(`/community/${boardName.split(' ')[0].toLowerCase()}/post/${id}`),
      [navigate, boardName, id],
    )
    return (
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 5 })}>
        <PreviewTextWrapper>
          <div className={css({ display: 'flex', pl: 2.5, alignItems: 'flex-start' })}>
            <BoardTag boardName={boardName as BoardType} variant="small" />
          </div>
          <PostTextPreview
            title={title}
            createdAt={createdAt}
            user={user}
            variant="default"
            description={content}
            handleNavigate={handleNavigate}
          />
        </PreviewTextWrapper>
        {thumbnailDir && (
          <button onClick={handleNavigate} className={css({ display: 'flex', w: 'full' })}>
            <img
              src={thumbnailDir}
              alt="Post"
              className={css({
                w: 'full',
                h: 254,
                rounded: 20,
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              })}
              style={{ objectFit: 'cover', backgroundPosition: 'top' }}
            />
          </button>
        )}
      </div>
    )
  },
)

export default PostPreview
