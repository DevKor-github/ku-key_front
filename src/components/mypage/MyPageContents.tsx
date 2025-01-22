import { css, cva } from '@styled-system/css'
import { match } from 'ts-pattern'

import { GetMyProfileResponse } from '@/api/types/user'
import ChangePassword from '@/components/mypage/Contents/ChangePassword'
import DeleteAccount from '@/components/mypage/Contents/DeleteAccount'
import ExchangeProfile from '@/components/mypage/Contents/ExchangeProfile'
import MyCommunity from '@/components/mypage/Contents/MyCommunity'
import MyCourseReview from '@/components/mypage/Contents/MyCourseReview'
import MyPoint from '@/components/mypage/Contents/MyPoint'
import PointHistory from '@/components/mypage/Contents/PointHistory'
import PublicProfile from '@/components/mypage/Contents/PublicProfile'
import MobileContentHeader from '@/components/mypage/MobileContentHeader'
import MobileMyPageSelector from '@/components/mypage/MobileMyPageSelector'
import MyPageNavigator from '@/components/mypage/MyPageNavigator'
import Responsive from '@/components/ui/responsive'
import { PAGE_TITLE } from '@/lib/constants/myPage'
import { PageType } from '@/types/myPage'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface MyPageContentsProps {
  myProfileData: GetMyProfileResponse
  setPage: (target: PageType) => void
  curPage: PageType
}
const MyPageContents = ({ myProfileData, setPage, curPage }: MyPageContentsProps) => {
  const isMobile = useMediaQueryByName('smDown')

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: { base: 'row', smDown: 'column' },
        gap: { base: 5, smDown: 0 },
        width: 'full',
        pb: { base: 33, smDown: 0 },
        maxW: '1200px',
        px: { base: '60px', lgDown: '30px', mdDown: '20px', smDown: 0 },
        smDown: {
          overflow: 'hidden',
          flexGrow: 1,
        },
      })}
    >
      <Responsive
        desktop={<MyPageNavigator curPage={curPage} setPage={setPage} />}
        mobile={curPage !== undefined && <MobileContentHeader title={PAGE_TITLE[curPage]} />}
      />
      <div
        className={cva({
          base: { flexGrow: 1, smDown: { overflowY: 'auto' } },
          variants: {
            bg: {
              white: {
                bgColor: 'white',
              },
              gray: {
                bgColor: 'rgba(0, 0, 0, 0.24)',
                backdropFilter: 'blur(2px)',
              },
            },
          },
        })({ bg: isMobile ? (curPage === 'delete-account' ? 'gray' : 'white') : undefined })}
      >
        {match(curPage)
          .with('point-history', () => <PointHistory />)
          .with('community', () => <MyCommunity />)
          .with('course-review', () => <MyCourseReview />)
          .with('public-profile', () => <PublicProfile myProfileData={myProfileData} />)
          .with('exchange-profile', () => <ExchangeProfile myProfileData={myProfileData} />)
          .with('password', () => <ChangePassword />)
          .with('delete-account', () => <DeleteAccount />)
          .with('my-point', () => <MyPoint myProfileData={myProfileData} />)
          .otherwise(() => (
            <MobileMyPageSelector setPage={setPage} />
          ))}
      </div>
    </div>
  )
}

export default MyPageContents
