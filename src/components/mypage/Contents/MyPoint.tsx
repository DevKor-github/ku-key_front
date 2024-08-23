import { css } from '@styled-stytem/css'

import { GetMyProfileResponse } from '@/api/types/user'
import PointStatus from '@/components/mypage/Contents/PointShop/PointStatus'

interface MyPointProps {
  myProfileData: GetMyProfileResponse
}
const MyPoint = ({ myProfileData }: MyPointProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', w: '818px' })}>
      <PointStatus name={myProfileData.name} point={myProfileData.point} />
    </div>
  )
}

export default MyPoint
