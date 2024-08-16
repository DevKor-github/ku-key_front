import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import { useGetPostsByBoard } from '@/api/hooks/community'
import BoardPostPreview from '@/components/community/Boards/BoardPostPreview'
import SectionTitle from '@/components/community/SectionTitle'
import SearchBox from '@/components/timetable/SearchBox'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { COMMUNITY_SEARCH_MESSAGES } from '@/lib/messages/community'
import useIntersect from '@/util/useIntersect'
import { useModal } from '@/util/useModal'
import { useSearch } from '@/util/useSearch'

const boardConfig: { [key: string]: number } = {
  community: 1,
  question: 2,
  information: 3,
}
const BoardSearch = () => {
  const { boardName } = useParams()
  const { searchParam, handleSetParam, deleteParam } = useSearch()
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetPostsByBoard(boardConfig[boardName ?? 'community'])
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
    if (!data?.length) return `No search results for "${keyword}"`
    return `"${keyword}" Search Results`
  }

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })
  return (
    <div className={css({ display: 'flex', flexDir: 'column', alignSelf: 'flex-start', maxW: 608, w: 'full' })}>
      <SearchBox
        initialKeyword={keyword ?? ''}
        placeholder={keyword ?? 'Search posts from entire board'}
        onSubmit={onSubmit}
        cssProps={{ width: 'full', alignSelf: 'stretch', borderRadius: '50px' }}
      />
      {keyword ? (
        <SectionTitle title={handleTitle()} />
      ) : (
        <SectionTitle title={`View recent ${boardName} posts`} description="Check out our recent posts" />
      )}
      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        {data?.map(post => (
          <div key={post.id} ref={fetchNextRef}>
            <BoardPostPreview
              id={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              user={post.user}
              reactionCount={post.reactionCount}
              views={post.views}
              myScrap={post.myScrap}
              commentCount={post.commentCount}
              scrapCount={post.scrapCount}
              thumbnailDir={post.thumbnailDir}
              boardName={boardName!}
            />
          </div>
        ))}
      </div>
      <NoticeModal content={COMMUNITY_SEARCH_MESSAGES.REQUIRED_LENGTH} isOpen={isOpen} />
    </div>
  )
}

export default BoardSearch
