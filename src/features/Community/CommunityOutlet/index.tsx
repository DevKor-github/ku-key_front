import * as s from './style.css'

import SearchBox from '@/components/timetable/SearchBox'
import CommunityPostDetail from '@/features/Community/CommunityPostDetail'
import { Button } from '@/ui/Button'
import { Typography } from '@/ui/Typography'

const CommunityOutlet = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.LeftWrapper}>
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
          <SearchBox initialKeyword={''} placeholder={'Search posts from entire board'} onSubmit={() => {}} />
        </div>
        <CommunityPostDetail />
      </div>
    </div>
  )
}

export default CommunityOutlet
