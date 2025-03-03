import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetMyProfile } from '@/api/hooks/user'
import MyPageContents from '@/components/mypage/MyPageContents'
import MyPageHeader from '@/components/mypage/MyPageHeader'
import MyPageWrapper from '@/components/mypage/MyPageWrapper'
import { MyPageParams, PageType } from '@/types/myPage'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const MyPage = () => {
  const navigate = useNavigate()

  const [queryParam, setQueryParam] = useQueryParams<MyPageParams>()
  const { page: curPage } = queryParam

  const { data: myProfileData } = useGetMyProfile()
  const isMobile = useMediaQueryByName('smDown')

  const isHeaderVisible =
    !isMobile ||
    !(curPage === 'community' || curPage === 'course-review' || curPage === 'delete-account' || curPage === 'password')

  useEffect(() => {
    if (curPage === undefined && !isMobile) {
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
    <MyPageWrapper>
      {isHeaderVisible && <MyPageHeader myProfileData={myProfileData} />}
      <MyPageContents myProfileData={myProfileData} curPage={curPage} setPage={setPage} />
    </MyPageWrapper>
  )
}

export default MyPage
