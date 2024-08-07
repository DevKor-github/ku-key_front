import { css, cx } from '@styled-stytem/css'
import { globalLayout } from '@styled-stytem/recipes'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Post from '@/components/community/post/Post'
import Button from '@/components/ui/button'

const PostView = () => {
  const navigate = useNavigate()
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
        </div>
      </div>
    </section>
  )
}

export default PostView
