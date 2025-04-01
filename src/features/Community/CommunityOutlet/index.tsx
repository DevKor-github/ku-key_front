import * as s from './style.css'

import CommunityPostDetail from '@/features/Community/CommunityPostDetail'
import CommunityHotPostPreview from '@/features/Community/HotPostPreview'
import CommunityPostSearch from '@/features/Community/PostSearch'

const CommunityOutlet = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.LeftWrapper}>
        <CommunityPostSearch />
        <CommunityPostDetail />
      </div>
      <CommunityHotPostPreview />
    </div>
  )
}

export default CommunityOutlet
