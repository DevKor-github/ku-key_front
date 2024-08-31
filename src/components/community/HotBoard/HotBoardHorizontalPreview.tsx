import { css } from '@styled-stytem/css'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetHotPosts } from '@/api/hooks/community'
import PostTextPreview from '@/components/community/PostTextPreview'

const HotBoardHorizontalPreview = () => {
  const { data: hotPosts } = useGetHotPosts()
  const navigate = useNavigate()
  const handleNavigate = useCallback(
    (id: number, boardName: string) => navigate(`/community/${boardName}/post/${id}`),
    [navigate],
  )

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '30px',
        alignItems: 'flex-start',
        overflow: 'hidden',
        // border: '1px solid #E5E5E5',
        alignSelf: 'center',
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'auto',
          maxW: 'screen',
          overflow: 'hidden',
          py: 0.5,
          alignItems: 'center',
          gap: '30px',
          alignSelf: 'stretch',
        })}
      >
        {hotPosts?.map(post => (
          <PostTextPreview
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
            user={post.user}
            variant="default"
            handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
          />
        ))}
      </div>
      <div
        className={css({
          display: 'flex',
          w: 'min-content',
          maxW: 'screen',
          py: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '30px',
          alignSelf: 'stretch',
        })}
        style={{ left: -400 }}
      >
        {hotPosts
          ?.reverse()
          .map(post => (
            <PostTextPreview
              key={post.id}
              title={post.title}
              createdAt={post.createdAt}
              user={post.user}
              variant="default"
              handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
            />
          ))}
      </div>
    </div>
  )
}

export default HotBoardHorizontalPreview
