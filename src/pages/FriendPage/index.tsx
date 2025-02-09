import { Responsive } from '@/common/Responsive'
import DesktopFriendPage from '@/pages/FriendPage/desktop'
import MobileFriendPage from '@/pages/FriendPage/mobile'

const FriendPage = () => {
  return <Responsive desktop={<DesktopFriendPage />} mobile={<MobileFriendPage />} />
}
export default FriendPage
