import { css } from '@styled-stytem/css'
import { formatDistanceToNow } from 'date-fns'
import { useAtomValue } from 'jotai'
import { Ellipsis, Eye } from 'lucide-react'

import BoardTag from '@/components/community/BoardTag'
import ReactionSection from '@/components/community/post/ReactionSection'
import { postAtom } from '@/lib/store/post'

const Post = () => {
  const postAtomData = useAtomValue(postAtom)
  const timeDistance = formatDistanceToNow(postAtomData.createdAt)

  return (
    <div
      className={css({
        display: 'flex',
        px: 5,
        pt: 5,
        pb: 10,
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: '50px',
        alignSelf: 'stretch',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        rounded: 10,
      })}
    >
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
            <p>{postAtomData.username}</p>
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
      <section className={css({ display: 'flex', w: 'full', pos: 'relative' })}>
        <div
          className={css({
            display: 'flex',
            pos: 'relative',
            flexDir: 'column',
            h: 437,
            border: '1px solid',
            w: '100%',
            alignItems: 'center',
            rounded: 10,
          })}
          style={{
            backgroundImage: `url(${postAtomData.imageDirs[0]?.imgDir})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={css({
            display: 'flex',
            pos: 'absolute',
            rounded: 10,
            w: 'full',
            justifyContent: 'center',
            alignItems: 'center',
            bgColor: 'rgba(0, 0, 0, 0.20)',
            backdropFilter: 'blur(25px)',
          })}
        >
          <img
            src={postAtomData.imageDirs[0]?.imgDir}
            alt="post"
            className={css({
              h: 437,
              rounded: 10,
              backdropFilter: 'blur(25px)',
              backdropBlur: '25px',
              zIndex: 1,
            })}
          />
        </div>
      </section>
      <ReactionSection />
    </div>
  )
}

export default Post
