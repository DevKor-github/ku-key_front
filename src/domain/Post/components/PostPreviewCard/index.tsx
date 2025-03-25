import { formatDistanceToNow } from 'date-fns'

import * as s from './style.css'

import Profile from '@/components/ui/profile'
import { PostPreviewWithBoardName } from '@/packages/api/ku-key/models'
import { Typography } from '@/ui/Typography'

type Props = Pick<PostPreviewWithBoardName, 'user' | 'createdAt' | 'title'>
const CommunityPostPreviewCard = ({ user, createdAt, title }: Props) => {
  const timeDistance = formatDistanceToNow(createdAt)

  return (
    <div className={s.Wrapper}>
      <Profile isAnonymous={user.isAnonymous} isDeleted={user.isDeleted} character={user.character} onlyTitle />
      <div className={s.Body}>
        <div className={s.Header}>
          <Typography mobileTypography="headingSB" color="darkGray2">
            {user.isAnonymous ? 'Anonymous' : user.username}
          </Typography>
          <Typography mobileTypography="headingSB" color="darkGray2">
            {timeDistance} ago
          </Typography>
        </div>
        <Typography
          typography="heading2SB"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {title}
        </Typography>
      </div>
    </div>
  )
}

export default CommunityPostPreviewCard
