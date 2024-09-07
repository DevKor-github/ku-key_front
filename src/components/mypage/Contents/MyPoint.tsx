import { css } from '@styled-stytem/css'

import { GetMyProfileResponse } from '@/api/types/user'
import PointStatus from '@/components/mypage/Contents/PointShop/PointStatus'
import Showcase from '@/components/mypage/Contents/PointShop/Showcase'

interface MyPointProps {
  myProfileData: GetMyProfileResponse
}
const MyPoint = ({ myProfileData }: MyPointProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 25, maxW: '818px' })}>
      <PointStatus name={myProfileData.name} point={myProfileData.point} />
      <Showcase myLevel={myProfileData.level} selectedLevel={myProfileData.selectedLevel} />
    </div>
  )
}

export default MyPoint
