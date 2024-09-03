import { css } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { useCallback, useMemo } from 'react'
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

  const doubledHotPosts = useMemo(() => (hotPosts ? [...hotPosts, ...hotPosts] : []), [hotPosts])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '30px',
        w: '100vw',
        maxW: '100%',
        overflowX: 'hidden',
        alignItems: 'flex-start',
        overflow: 'hidden',
        alignSelf: 'center',
      })}
    >
      <motion.div
        className={css({
          display: 'flex',
          py: 0.5,
          alignItems: 'center',
          gap: '30px',
          alignSelf: 'stretch',
        })}
        animate={{
          x: [0, '-80%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 20,
              ease: 'linear',
            },
          },
        }}
      >
        {doubledHotPosts.map((post, index) => (
          <PostTextPreview
            key={post.id + index}
            title={post.title}
            createdAt={post.createdAt}
            user={post.user}
            variant="default"
            handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
          />
        ))}
      </motion.div>
      <motion.div
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
        animate={{
          x: [0, '80%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 20,
              ease: 'linear',
            },
          },
        }}
      >
        {doubledHotPosts?.map((post, index) => (
          <PostTextPreview
            key={post.id + index}
            title={post.title}
            createdAt={post.createdAt}
            user={post.user}
            variant="default"
            handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default HotBoardHorizontalPreview
