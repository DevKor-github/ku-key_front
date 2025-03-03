import * as s from './style.css'

import HotBoardPreview from '@/components/community/HotBoard/HotBoardPreview'
import CommunityPostDetail from '@/features/Community/CommunityPostDetail'
import CommunityPostSearch from '@/features/Community/PostSearch'

const CommunityOutlet = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.LeftWrapper}>
        <CommunityPostSearch />
        <CommunityPostDetail />
      </div>
      <HotBoardPreview />
    </div>
  )
}

export default CommunityOutlet
