import { css } from '@styled-stytem/css'

import { useGetPostsAll } from '@/api/hooks/community'
import PostPreview from '@/components/community/PostPreview'
import SectionTitle from '@/components/community/SectionTitle'
import SearchBox from '@/components/timetable/SearchBox'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { COMMUNITY_SEARCH_MESSAGES } from '@/lib/messages/community'
import useIntersect from '@/util/useIntersect'
import { useModal } from '@/util/useModal'
import { useSearch } from '@/util/useSearch'

const CommunitySearch = () => {
  const { data: posts, fetchNextPage, hasNextPage, isFetching } = useGetPostsAll()
  const { searchParam, handleSetParam, deleteParam } = useSearch()
  const { isOpen, handleOpen } = useModal(true)
  const onSubmit = (searchParam: string) => {
    if (searchParam === '') {
      return deleteParam('keyword')
    }
    if (searchParam.length < 2) return handleOpen()
    handleSetParam('keyword', searchParam)
  }

  const keyword = searchParam.get('keyword')

  const handleTitle = () => {
    if (!posts?.length) return `No search results for "${keyword}"`
    return `"${keyword}" Search Results`
  }

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  return (
    <div className={css({ display: 'flex', flexDir: 'column', maxW: 608 })}>
      <SearchBox
        initialKeyword={keyword ?? ''}
        placeholder={keyword ?? 'Search posts from entire board'}
        onSubmit={onSubmit}
        cssProps={{ width: 608, borderRadius: '50px' }}
      />
      {keyword ? (
        <SectionTitle title={handleTitle()} />
      ) : (
        <SectionTitle title="View recent posts" description="Check out our recent posts" />
      )}
      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        {posts?.map(post => (
          <div ref={fetchNextRef} key={post.id}>
            <PostPreview
              id={post.id}
              title={post.title}
              boardName={post.boardName}
              user={post.user}
              createdAt={post.createdAt}
              content={post.content}
              thumbnailDir={post.thumbnailDir}
            />
          </div>
        ))}
      </div>
      <NoticeModal content={COMMUNITY_SEARCH_MESSAGES.REQUIRED_LENGTH} isOpen={isOpen} />
    </div>
  )
}

export default CommunitySearch
