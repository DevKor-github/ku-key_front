import { css } from '@styled-stytem/css'
import { formatDistanceToNow } from 'date-fns'
import { Bookmark, Cookie, Eye, MessageCircle } from 'lucide-react'

import AnonymousProfileImg from '@/assets/Anonymous.jpg'
import { BoardPostPreviewProps } from '@/types/community'

const IconWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: 1,
})

const BoardPostPreview = ({
  id,
  title,
  content,
  createdAt,
  username,
  commentCount,
  scrapCount,
  thumbnailDir,
  reaction,
}: BoardPostPreviewProps) => {
  const timeDistance = formatDistanceToNow(createdAt)

  return (
    <div
      className={css({
        display: 'flex',
        maxW: 608,
        flexDir: 'column',
        alignItems: 'flex-start',
        pt: 10,
        gap: 10,
        rounded: 20,
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        bgColor: 'white',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          gap: 5,
          px: 5,
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            fontSize: 16,
            fontWeight: 600,
            color: 'darkGray.2',
          })}
        >
          <p>{timeDistance} ago</p>
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
            <Eye size={16} />
            <p>100</p>
          </div>
        </div>
        <h1
          className={css({
            w: 'full',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: -0.4,
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          })}
        >
          {title}
        </h1>
        <p
          className={css({
            display: '-webkit-box',
            w: 'full',
            fontSize: 16,
            fontWeight: 400,
            overflowY: 'hidden',
            boxOrient: 'vertical',
            textOverflow: 'ellipsis',
            color: 'darkGray.2',
            lineClamp: 3,
          })}
        >
          {content}
        </p>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          px: 5,
          py: thumbnailDir ? 10 : 2.5,
          bgGradient: thumbnailDir ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30))' : '',
          rounded: '0 0 20px 20px',
          color: thumbnailDir ? 'white' : 'darkGray.2',
          //   backgroundImage: thumbnailDir ? `url(${thumbnailDir})` : '',
        })}
        style={{
          backgroundImage: thumbnailDir ? `url(${thumbnailDir})` : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
          <img src={AnonymousProfileImg} alt="Profile" className={css({ w: 15, h: 15, rounded: 'full' })} />
          <p className={css({ fontSize: 16, fontWeight: 600 })}>{username}</p>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <div className={IconWrapper}>
            <Cookie size={16} />
            <p>35</p>
          </div>
          <div className={IconWrapper}>
            <MessageCircle size={16} />
            <p>{commentCount}</p>
          </div>
          <div className={IconWrapper}>
            <Bookmark size={16} />
            <p>{scrapCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardPostPreview
