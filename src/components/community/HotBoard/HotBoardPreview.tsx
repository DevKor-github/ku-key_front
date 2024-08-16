import { useGetHotPostPreview } from '@/api/hooks/community'
import BoardPreview from '@/components/community/BoardPreview'

const HotBoardPreview = () => {
  const { data: hotPosts } = useGetHotPostPreview()
  return (
    <BoardPreview
      previewPosts={hotPosts.data}
      title="Hot Board"
      description="Check out most popular posts"
      link="/community/board/hotboard"
    />
  )
}

export default HotBoardPreview
