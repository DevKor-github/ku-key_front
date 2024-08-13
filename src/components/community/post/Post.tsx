import { css } from '@styled-stytem/css'
import { postCard } from '@styled-stytem/recipes'
import { formatDistanceToNow } from 'date-fns'
import { useAtomValue } from 'jotai'
import { Ellipsis, Eye } from 'lucide-react'
import { memo } from 'react'

import BoardTag from '@/components/community/BoardTag'
import PostImgCarousel from '@/components/community/post/PostImgCarousel'
import ReactionSection from '@/components/community/post/ReactionSection'
import { postAtom } from '@/lib/store/post'

const Post = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const timeDistance = formatDistanceToNow(postAtomData.createdAt)

  return (
    <div className={postCard()}>
      <section
        className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 5, alignSelf: 'stretch' })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 18,
              fontWeight: 500,
              color: 'darkGray.2',
            })}
          >
            <p>{postAtomData.user.username}</p>
            <p>{timeDistance} ago</p>
          </div>
          <button>
            <Ellipsis className={css({ color: 'darkGray.1' })} />
          </button>
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
          })}
        >
          <BoardTag boardName={'Community Board'} variant="default" />
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1, color: 'darkGray.2' })}>
            <Eye size={16} />
            <p className={css({ fontSize: 16, fontWeight: 600 })}>{postAtomData.views}</p>
          </div>
        </div>
      </section>
      <section
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: '50px',
          alignSelf: 'stretch',
        })}
      >
        <h1
          className={css({
            fontSize: 26,
            fontWeight: 600,
            color: 'black.2',
            alignSelf: 'stretch',
            whiteSpace: 'pre-wrap',
          })}
        >
          {postAtomData.title}
        </h1>
        <p className={css({ fontSize: 18, fontWeight: 500, color: 'darkGray.1', whiteSpace: 'pre-wrap' })}>
          {postAtomData.content}
        </p>
      </section>
      {postAtomData.imageDirs.length > 0 && <PostImgCarousel />}
      <ReactionSection />
    </div>
  )
})

export default Post
