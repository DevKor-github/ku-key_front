import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import { useGetPostsByBoard } from '@/api/hooks/community'
import BoardPostPreview from '@/components/community/BoardPostPreview'
import SectionTitle from '@/components/community/SectionTitle'
import SearchBox from '@/components/timetable/SearchBox'
import { useSearch } from '@/util/useSearch'

const boardConfig: { [key: string]: number } = {
  community: 1,
  question: 2,
  information: 3,
}
const BoardSearch = () => {
  const { boardName } = useParams()
  const { searchParam, handleSetParam, deleteParam } = useSearch()
  const { data } = useGetPostsByBoard(boardConfig[boardName ?? 'community'])
  const onSubmit = (searchParam: string) => {
    if (searchParam === '') {
      return deleteParam('keyword')
    }
    handleSetParam('keyword', searchParam)
  }

  const keyword = searchParam.get('keyword')
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <SearchBox
        initialKeyword={keyword ?? ''}
        placeholder={keyword ?? 'Search posts from entire board'}
        onSubmit={onSubmit}
        cssProps={{ width: 608, borderRadius: '50px' }}
      />
      {keyword ? (
        <SectionTitle title={`"${keyword}" Search Results`} />
      ) : (
        <SectionTitle title={`View recent ${boardName} posts`} description="Check out our recent posts" />
      )}
      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        {data.posts.map(post => (
          <BoardPostPreview
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            username={post.username}
            commentCount={post.commentCount}
            scrapCount={post.scrapCount}
            thumbnailDir={post.thumbnailDir}
            reaction={post.reaction}
          />
        ))}
      </div>
    </div>
  )
}

export default BoardSearch
