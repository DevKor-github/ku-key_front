import * as s from './style.css'

import { PostPreviewWithBoardName } from '@/packages/api/ku-key/models'

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
  return <div className={s.Wrapper}>MobileFeedItem</div>
}

export default MobileFeedItem
