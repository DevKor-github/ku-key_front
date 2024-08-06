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
    // <div
    //   className={css({
    //     display: 'flex',
    //     flexDir: 'column',
    //     alignItems: 'flex-start',
    //     alignSelf: 'stretch',
    //     gap: 5,
    //     w: 399,
    //   })}
    // >
    //   <SectionTitle title="Hot Board" description="Check out most popular posts" link="/community/hotboard" />
    //   {hotPosts.map(post => (
    //     <PreviewTextWrapper key={post.id}>
    //       <PreviewTag boardName={post.boardName as BoardType} />
    //       <PostTextPreview
    //         title={post.title}
    //         createdAt={post.createdAt}
    //         username={post.username}
    //         variant={{ variant: 'onlyTitle' }}
    //       />
    //     </PreviewTextWrapper>
    //   ))}
    // </div>
  )
}

export default HotBoardPreview
