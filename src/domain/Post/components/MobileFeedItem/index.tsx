import { useCallback, useMemo } from 'react'
import { LuBookmark, LuBookText, LuCookie, LuMessageCircle, LuMessageCircleQuestion, LuUsers } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { match } from 'ts-pattern'

import * as s from './style.css'

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
  showCommunityBadge?: boolean
}
const MobileFeedItem = ({
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
  showCommunityBadge,
}: Props) => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(
    () => navigate(`/community/${boardName.split(' ')[0].toLowerCase()}/post/${id}`),
    [navigate, boardName, id],
  )
  const svg = useMemo(
    () =>
      match(boardName)
        .with('Community Board', () => <LuUsers className={s.Icon} />)
        .with('Question Board', () => <LuMessageCircleQuestion className={s.Icon} />)
        .with('Information Board', () => <LuBookText className={s.Icon} />)
        .otherwise(() => <LuBookText className={s.Icon} />),
    [boardName],
  )
  return (
    <div className={s.Wrapper} onClick={handleNavigate}>
      <div className={s.BodyWrapper}>
        {thumbnailDir && (
          <div
            className={s.Image}
            style={{
              backgroundImage: `url(${thumbnailDir})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div className={s.Text}>
          {showCommunityBadge && (
            <div className={s.Tag}>
              {svg}
              <Typography mobileTypography="miniTag1R" color="red3">
                {boardName}
              </Typography>
            </div>
          )}
          <div className={s.TypoWrapper}>
            <Typography
              mobileTypography="headingM"
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </Typography>
          </div>
          <div className={s.TypoWrapper}>
            <Typography
              mobileTypography="bodyR"
              color="darkGray1"
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                wordBreak: 'break-all',
                width: '100%',
                // wordWrap: 'break-word',
              }}
            >
              {content}
            </Typography>
          </div>
        </div>
      </div>
      <div className={s.FeedbackWrapper}>
        <div className={s.Profile}></div>
        <div className={s.FeedBack}>
          <div className={s.FeedBackIcon}>
            <LuCookie size={16} />
            <Typography mobileTypography="headingSB" color="darkGray2">
              {reactionCount}
            </Typography>
          </div>
          <div className={s.FeedBackIcon}>
            <LuMessageCircle size={16} />
            <Typography mobileTypography="headingSB" color="darkGray2">
              {commentCount}
            </Typography>
          </div>
          <div className={s.FeedBackIcon}>
            <LuBookmark
              size={16}
              fill={myScrap ? vars.color.red2 : 'none'}
              color={myScrap ? vars.color.red2 : 'darkGray2'}
            />
            <Typography mobileTypography="headingSB" color="darkGray2">
              {scrapCount}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileFeedItem
