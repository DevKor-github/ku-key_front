import { formatDistanceToNow } from 'date-fns'
import { useCallback } from 'react'
import { HiOutlineEye } from 'react-icons/hi'
import { LuBookmark, LuCookie, LuMessageCircle } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import Profile from '@/components/ui/profile'
import PostCategoryBadge from '@/domain/Post/components/PostCategoryBadge'
import { PostPreviewWithBoardName } from '@/packages/api/ku-key/models'
import { vars } from '@/theme/theme.css'
import { Typography } from '@/ui/Typography'

type Props = Pick<
  PostPreviewWithBoardName,
  | 'id'
  | 'title'
  | 'content'
  | 'createdAt'
  | 'user'
  | 'views'
  | 'reactionCount'
  | 'commentCount'
  | 'scrapCount'
  | 'commentCount'
  | 'scrapCount'
  | 'myScrap'
  | 'thumbnailDir'
  | 'boardName'
> & {
  isAllCategory?: boolean
}

const FeedItem = ({
  id,
  title,
  content,
  createdAt,
  user,
  views,
  reactionCount,
  commentCount,
  scrapCount,
  myScrap,
  thumbnailDir,
  boardName,
  isAllCategory,
}: Props) => {
  const timeDistance = formatDistanceToNow(createdAt)
  const navigate = useNavigate()
  const handleNavigate = useCallback(
    () => navigate(`/community/${boardName.split(' ')[0].toLowerCase()}/post/${id}`),
    [navigate, boardName, id],
  )

  return (
    <button className={s.Wrapper} onClick={handleNavigate}>
      <div className={s.ContentsWrapper}>
        <div className={s.Header}>
          <div className={s.LeftWrapper}>
            {isAllCategory && <PostCategoryBadge boardName={boardName} />}
            <Typography typography="headingSB" color="darkGray2">
              {timeDistance}
            </Typography>
          </div>
          <div className={s.ViewCount}>
            <HiOutlineEye size={20} />
            <Typography typography="headingSB" color="darkGray2">
              {views}
            </Typography>
          </div>
        </div>
        <Typography
          mobileTypography="display2SB"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {title}
        </Typography>
        <Typography
          typography="body1R"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'pre-wrap',
          }}
          color="darkGray1"
        >
          {content}
        </Typography>
      </div>
      <div
        className={s.FeedInfo}
        style={{
          padding: thumbnailDir ? '2.5rem 1.25rem' : '0.625rem 1.25rem',
          background: thumbnailDir
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${thumbnailDir})`
            : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: thumbnailDir ? '0 0 0.625rem 0.625rem' : '0',
        }}
      >
        <div className={s.User}>
          <Profile onlyTitle isAnonymous={user.isAnonymous} isDeleted={user.isDeleted} character={user.character} />
          <Typography mobileTypography="headingSB" color={thumbnailDir ? 'white' : 'darkGray2'}>
            {user.isAnonymous ? 'Anonymous' : user.username}
          </Typography>
        </div>
        <div className={s.FeedBack}>
          <div className={s.Icon}>
            <LuCookie size={20} color={thumbnailDir ? 'white' : 'darkGray2'} />
            <Typography mobileTypography="headingSB" color={thumbnailDir ? 'white' : 'darkGray2'}>
              {reactionCount}
            </Typography>
          </div>
          <div className={s.Icon}>
            <LuMessageCircle size={20} color={thumbnailDir ? 'white' : 'darkGray2'} />
            <Typography mobileTypography="headingSB" color={thumbnailDir ? 'white' : 'darkGray2'}>
              {commentCount}
            </Typography>
          </div>
          <div className={s.Icon}>
            <LuBookmark
              size={20}
              fill={myScrap ? vars.color.red2 : 'none'}
              color={myScrap ? vars.color.red2 : thumbnailDir ? 'white' : 'darkGray2'}
            />
            <Typography mobileTypography="headingSB" color={thumbnailDir ? 'white' : 'darkGray2'}>
              {scrapCount}
            </Typography>
          </div>
        </div>
      </div>
    </button>
  )
}

export default FeedItem
