import * as s from './style.css'

import PostPreviewItem from '@/domain/Post/components/PostPreviewItem'
import { useReadCommunityHotPosts } from '@/domain/Post/hooks/useReadCommunityHotPosts'
import { Typography } from '@/ui/Typography'

const CommunityHotPostPreview = () => {
  const { data: hotPosts } = useReadCommunityHotPosts({ take: 5 })
  return (
    <div className={s.Wrapper}>
      <div className={s.TitleWrapper}>
        <div className={s.Title}>
          <Typography typography="titleSB">Hot Posts</Typography>
          <Typography typography="body1M" color="darkGray1">
            Check out most popular posts
          </Typography>
        </div>
      </div>
      <div className={s.ItemWrapper}>
        {hotPosts.map(post => (
          <PostPreviewItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default CommunityHotPostPreview
