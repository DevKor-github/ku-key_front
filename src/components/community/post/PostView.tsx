import { css, cx } from '@styled-system/css'
import { globalLayout } from '@styled-system/recipes'
import { useSetAtom } from 'jotai'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetPostById } from '@/api/hooks/community'
import CommentView from '@/components/community/post/CommentView'
import Post from '@/components/community/post/Post'
import PostComment from '@/components/community/post/PostComment'
import Button from '@/components/ui/button'
import { initialPostData, postAtom } from '@/lib/store/post'

const PostView = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { data: post, isFetched } = useGetPostById(parseInt(postId ?? ''))
  const setPostData = useSetAtom(postAtom)
  useEffect(() => {
    if (isFetched) {
      setPostData({ ...post, myReaction: post.myReaction })
    }
    return () => setPostData(initialPostData)
  }, [post, setPostData, isFetched])

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
        <Button variant="gray" onClick={() => navigate(-1)} className={css({ lgDown: { display: 'none' } })}>
          <ArrowLeft />
          PREV
        </Button>
        <div
          className={css({
            display: 'flex',
            w: 817,
            flexDir: 'column',
            alignItems: 'flex-start',
            gap: '50px',
            maxW: '51rem',
          })}
        >
          <Post />
          <PostComment />
          <CommentView />
        </div>
      </div>
    </section>
  )
}

export default PostView
