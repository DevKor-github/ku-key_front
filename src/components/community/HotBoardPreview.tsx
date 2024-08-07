import { useGetHotPosts } from '@/api/hooks/community'
import BoardPreview from '@/components/community/BoardPreview'

const HotBoardPreview = () => {
  const { data: hotPosts } = useGetHotPosts()
  return (
    <BoardPreview
      previewPosts={hotPosts}
      title="Hot Board"
      description="Check out most popular posts"
      link="/community/hotboard"
    />
  )
}

export default HotBoardPreview
