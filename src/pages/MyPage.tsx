import { css } from '@styled-stytem/css'

import MypageBG from '@/assets/MypageBG.jpg'
import { useGetMyProfile } from '@/api/hooks/user'
import MyPageBG from '@/assets/MypageBG.jpg'
import DueDateCard from '@/components/mypage/DueDateCard'
import MyPageContents from '@/components/mypage/MyPageContents'
import MypageWrapper from '@/components/mypage/MypageWrapper'
import UserInfo from '@/components/mypage/UserInfo'

const MyPage = () => {
  const { data: myProfileData } = useGetMyProfile()
  return (
    <MypageWrapper>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
          alignItems: 'flex-start',
          color: 'white',
          bgColor: 'bg.gray',
        })}
      >
        <div
          className={css({
            display: 'flex',
            px: { base: 56, mdDown: 5 },
            h: { base: 500, mdDown: 250 },
            w: 'full',
            alignItems: 'center',
            zIndex: 0,
            bgSize: 'cover',
            bgPosition: 'center',
          })}
          style={{
            backgroundImage: `url(${MypageBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <UserInfo
            name={myProfileData.name}
            country={myProfileData.country}
            point={myProfileData.point}
            languages={myProfileData.languages}
            homeUniversity={myProfileData.homeUniversity}
          />
        </div>
        <DueDateCard />
      </div>
      <MyPageContents myProfileData={myProfileData} />
    </MypageWrapper>
  )
}

export default MyPage
