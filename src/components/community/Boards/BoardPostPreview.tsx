import { css } from '@styled-system/css'
import { Bookmark, Cookie, Eye, MessageCircle } from 'lucide-react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Profile from '@/components/ui/profile'
import { BoardPostPreviewProps } from '@/types/community'
import { getFormattedTimeString } from '@/util/getFormattedTimeString'

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
  user,
  reactionCount,
  views,
  commentCount,
  scrapCount,
  thumbnailDir,
  myScrap,
  boardName,
}: BoardPostPreviewProps) => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(() => navigate(`/community/${boardName}/post/${id}`), [navigate, boardName, id])

  return (
    <button
      className={css({
        all: 'unset',
        display: 'flex',
        maxW: 608,
        flexDir: 'column',
        alignItems: 'flex-start',
        pt: 10,
        gap: thumbnailDir ? 10 : 5,
        rounded: 20,
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        bgColor: 'white',
        cursor: 'pointer',
        w: 'full',
      })}
      onClick={handleNavigate}
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
          <p>{getFormattedTimeString(createdAt)}</p>
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
            <Eye size={16} />
            <p>{views}</p>
          </div>
        </div>
        <h1
          className={css({
            w: 'full',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: -0.4,
            overflow: 'hidden',
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
            overflow: 'hidden',
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
          rounded: '0 0 20px 20px',
          color: thumbnailDir ? 'white' : 'darkGray.2',
        })}
        style={{
          background: thumbnailDir
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${thumbnailDir})`
            : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
          <Profile
            isAnonymous={user.isAnonymous}
            isDeleted={user.isDeleted}
            character={user.character}
            onlyTitle
            bgWhite={!!thumbnailDir}
          />
          <p className={css({ fontSize: 16, fontWeight: 600 })}>{user.isAnonymous ? 'Anonymous' : user.username}</p>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <div className={IconWrapper}>
            <Cookie size={16} />
            <p>{reactionCount}</p>
          </div>
          <div className={IconWrapper}>
            <MessageCircle size={16} />
            <p>{commentCount}</p>
          </div>
          <div className={IconWrapper}>
            <Bookmark
              size={16}
              className={css({ fill: myScrap ? 'red.2' : 'none', color: myScrap ? 'red.2' : 'inherit' })}
            />
            <p>{scrapCount}</p>
          </div>
        </div>
      </div>
    </button>
  )
}

export default BoardPostPreview
