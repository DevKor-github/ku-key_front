import { css } from '@styled-stytem/css'

import DueDateCard from '@/components/mypage/DueDateCard'
import Mask from '@/components/mypage/Mask'
import MemoryCarousel from '@/components/mypage/MemoryCarousel'
import MypageWrapper from '@/components/mypage/MypageWrapper'
import UserInfo from '@/components/mypage/UserInfo'

const MyPage = () => {
  return (
    <MypageWrapper>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          w: 'full',
          h: { base: 680, mdDown: 340 },
          alignItems: 'flex-start',
          color: 'white',
          bg: 'white',
        })}
      >
        <div
          className={css({
            display: 'flex',
            px: { base: 56, mdDown: 5 },
            h: { base: 500, mdDown: 250 },
            w: 'full',
            bg: 'red.2',
            alignItems: 'center',
            zIndex: 0,
          })}
        >
          <Mask />
          <UserInfo />
          {/* <img
            src={BackgroundImage}
            alt="mypage background"
            className={css({ display: 'flex', flex: 1, flexGrow: 0, alignSelf: 'flex-end' })}
          /> */}
        </div>
        <DueDateCard />
      </div>
      <MemoryCarousel />
    </MypageWrapper>
  )
}

export default MyPage
