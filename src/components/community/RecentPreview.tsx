import { useGetRecentPostsPreview } from '@/api/hooks/community'
import BoardPreview from '@/components/community/BoardPreview'

const RecentPreview = () => {
  const { data: recentPostsPreview } = useGetRecentPostsPreview()
  return (
    <BoardPreview
      previewPosts={recentPostsPreview}
      title="Recent posts"
      description="Check out our recent posts"
      link="/community"
    />
  )
}

export default RecentPreview
