import { css } from '@styled-system/css'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetMyProfile } from '@/api/hooks/user'
import DueDateCard from '@/components/mypage/DueDateCard'
import MyPageContents from '@/components/mypage/MyPageContents'
import MypageWrapper from '@/components/mypage/MypageWrapper'
import UserInfo from '@/components/mypage/UserInfo'
import { characterConfig } from '@/components/ui/profile/CharacterConfig'
import { MyPageParams, PageType } from '@/types/myPage'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const MyPage = () => {
  const navigate = useNavigate()
  const [queryParam, setQueryParam] = useQueryParams<MyPageParams>()
  const { page: curPage } = queryParam

  const { data: myProfileData } = useGetMyProfile()
  const isMobile = useMediaQueryByName('smDown')

  const headerVisibility =
    !isMobile ||
    !(curPage === 'community' || curPage === 'course-review' || curPage === 'delete-account' || curPage === 'password')

  useEffect(() => {
    if (curPage === null && !isMobile) {
      navigate(`${location.pathname}?page=my-point`, { replace: true })
    }
  }, [curPage, navigate, isMobile])

  const setPage = useCallback(
    (target: PageType) => {
      if (target) return setQueryParam({ page: target })
      setQueryParam({ page: undefined })
    },
    [setQueryParam],
  )

  return (
    <MypageWrapper>
      {headerVisibility && (
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            w: 'full',
            alignItems: 'flex-start',
            color: 'white',
            bgColor: 'bg.gray',
            position: 'relative',
          })}
        >
          <div
            className={css({
              display: 'flex',
              px: { base: 56, lgDown: 20, mdDown: 18, smDown: 7 },
              h: { base: '31rem', lgDown: '25rem', mdDown: 80, smDown: 60 },
              w: 'full',
              alignItems: 'center',
              zIndex: 0,
              bgSize: 'cover',
              bgPosition: 'center',
              position: 'relative',
            })}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/myPageBanner.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <UserInfo
              name={myProfileData.username}
              country={myProfileData.country}
              point={myProfileData.point}
              languages={myProfileData.languages}
              homeUniversity={myProfileData.homeUniversity}
            />
            <img
              src={characterConfig[myProfileData.type][myProfileData.selectedLevel]}
              alt="My Character"
              className={css({
                w: { base: '28.125rem', lgDown: '22.5rem', mdDown: '18rem', smDown: '11rem' },
                position: 'absolute',
                right: { base: '9.375rem', lgDown: '6rem', mdDown: '2rem', smDown: 0 },
                top: { base: 5, lgDown: 0 },
              })}
            />
          </div>
          <DueDateCard startDay={myProfileData.startDay} endDay={myProfileData.endDay} />
        </div>
      )}
      <MyPageContents myProfileData={myProfileData} curPage={curPage} setPage={setPage} />
    </MypageWrapper>
  )
}

export default MyPage
