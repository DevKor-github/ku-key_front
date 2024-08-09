import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetPostById } from '@/api/hooks/community'
import Post from '@/components/community/post/Post'
import PostComment from '@/components/community/post/PostComment'
import Button from '@/components/ui/button'

const PostView = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { data: post } = useGetPostById(parseInt(postId ?? ''))
  console.log(post)
  return (
    <section
      className={cx(
        globalLayout(),
        css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          mt: '55px',
        }),
      )}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          maxW: 1131,
          gap: 5,
        })}
      >
        <Button variant="gray" onClick={() => navigate(-1)}>
          <ArrowLeft />
          PREV
        </Button>
        <div className={css({ display: 'flex', w: 817, flexDir: 'column', alignItems: 'flex-start', gap: '50px' })}>
          <Post />
          <PostComment />
        </div>
      </div>
    </section>
  )
}

export default PostView
