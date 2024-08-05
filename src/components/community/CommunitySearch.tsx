import { css } from '@styled-stytem/css'

import { useGetPostsAll } from '@/api/hooks/community'
import PostPreview from '@/components/community/PostPreview'
import SectionTitle from '@/components/community/SectionTitle'
import SearchBox from '@/components/timetable/SearchBox'

const CommunitySearch = () => {
  const { data: posts } = useGetPostsAll()
  console.log(posts)
  const onSubmit = (searchParam: string) => {
    console.log(searchParam)
  }
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <SearchBox
        placeholder="Search posts from entire board"
        onSubmit={onSubmit}
        cssProps={{ width: 608, borderRadius: '50px' }}
      />
      <SectionTitle title="View recent posts" description="Check out our recent posts" link="/community/board" />
      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        {posts?.map(post => (
          <PostPreview
            key={post.id}
            id={post.id}
            title={post.title}
            boardName={post.boardName}
            username={post.username}
            createdAt={post.createdAt}
            content={post.content}
            thumbnailDir={post.thumbnailDir}
          />
        ))}
      </div>
    </div>
  )
}

export default CommunitySearch
