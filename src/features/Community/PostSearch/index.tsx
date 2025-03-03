import * as s from './style.css'

import SearchBox from '@/components/timetable/SearchBox'
import NoticeModal from '@/components/ui/modal/NoticeModal'
import { COMMUNITY_SEARCH_MESSAGES } from '@/lib/messages/community'
import { Button } from '@/ui/Button'
import { Typography } from '@/ui/Typography'
import { useModal } from '@/util/hooks/useModal'
import { useQueryParams } from '@/util/hooks/useQueryParams'

type SearchParams = {
  keyword?: string
}

const CommunityPostSearch = () => {
  const [queryParams, setQueryParams] = useQueryParams<SearchParams>()
  const { isOpen, handleOpen } = useModal(true)
  const onSubmit = (searchParam: string) => {
    if (searchParam.length < 2 && searchParam.length > 0) return handleOpen()
    setQueryParams({ keyword: searchParam.length ? searchParam : undefined })
  }

  const keyword = queryParams.keyword ?? ''

  return (
    <div className={s.SearchWrapper}>
      <div className={s.Header}>
        <div className={s.Title}>
          <Typography typography="titleSB">View Recent Posts</Typography>
          <Typography typography="body1M" color="darkGray1">
            Check out our recent posts
          </Typography>
        </div>
        <Button variant="red">Create post</Button>
      </div>
      <SearchBox initialKeyword={keyword} placeholder={'Search posts from entire board'} onSubmit={onSubmit} />
      <NoticeModal content={COMMUNITY_SEARCH_MESSAGES.REQUIRED_LENGTH} isOpen={isOpen} />
    </div>
  )
}

export default CommunityPostSearch
