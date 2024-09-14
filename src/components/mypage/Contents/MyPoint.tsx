import { css } from '@styled-system/css'

import { GetMyProfileResponse } from '@/api/types/user'
import PointStatus from '@/components/mypage/Contents/PointShop/PointStatus'
import Showcase from '@/components/mypage/Contents/PointShop/Showcase'

interface MyPointProps {
  myProfileData: GetMyProfileResponse
}
const MyPoint = ({ myProfileData }: MyPointProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: { base: 25, mdDown: 10 },
        maxW: { base: '818px', mdDown: '400px' },
      })}
    >
      <PointStatus name={myProfileData.username} point={myProfileData.point} />
      <Showcase
        myLevel={myProfileData.level}
        selectedLevel={myProfileData.selectedLevel}
        myCharacterType={myProfileData.type}
      />
    </div>
  )
}

export default MyPoint
