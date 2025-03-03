import * as s from './style.css'

import PostCategoryBadge from '@/domain/Post/components/PostCategoryBadge'
import CommunityPostPreviewCard from '@/domain/Post/components/PostPreviewCard'
import { PostPreviewWithBoardName } from '@/packages/api/ku-key/models'

type Props = PostPreviewWithBoardName

const PostPreviewItem = ({ user, createdAt, title, boardName }: Props) => {
  return (
    <div className={s.Wrapper}>
      <PostCategoryBadge boarName={boardName} />
      <CommunityPostPreviewCard user={user} createdAt={createdAt} title={title} />
    </div>
  )
}

export default PostPreviewItem
