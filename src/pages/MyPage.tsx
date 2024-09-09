import { css } from '@styled-stytem/css'

import { useGetMyProfile } from '@/api/hooks/user'
import MypageBG from '@/assets/MypageBG.png'
import DueDateCard from '@/components/mypage/DueDateCard'
import MyPageContents from '@/components/mypage/MyPageContents'
import MypageWrapper from '@/components/mypage/MypageWrapper'
import UserInfo from '@/components/mypage/UserInfo'
import { characterConfig } from '@/components/ui/profile/CharacterConfig'

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
            position: 'relative',
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
          <img
            src={characterConfig[myProfileData.type][myProfileData.selectedLevel]}
            alt="My Character"
            className={css({
              w: { base: '450px', mdDown: '250px' },
              position: 'absolute',
              right: { base: '150px', mdDown: 0 },
              top: { base: '20px', mdDown: 0 },
            })}
          />
        </div>
        <DueDateCard startDay={myProfileData.startDay} endDay={myProfileData.endDay} />
      </div>
      <MyPageContents myProfileData={myProfileData} />
    </MypageWrapper>
  )
}

export default MyPage
