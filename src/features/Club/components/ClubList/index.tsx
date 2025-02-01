import { toast } from 'sonner'

import * as s from './style.css'

import ClubCard from '@/components/club/ClubCard'
import Toast from '@/components/ui/toast'
import { useGetClubSearch } from '@/features/Club/hooks/useGetClubSearch'
import { usePostClubLike } from '@/features/Club/hooks/usePostClubLike'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { ClubInterface, ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { useDeepCompareCallback } from '@/util/hooks/useDeepCompare'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const ClubList = () => {
  const isLogin = useAuth().authState ?? false

  const [query] = useQueryParams<ClubSearchParams>()
  // api request를 보낼 때 사용되는 query
  const requestQuery = {
    category: query.category,
    keyword: query.keyword,
    sortBy: query.sortBy,
    wishList: query.filter === 'like',
    isLogin,
  }

  const { data } = useGetClubSearch(requestQuery)
  const { mutate: likeClub } = usePostClubLike()

  const handleLikeClick = useDeepCompareCallback(
    (clubId: number) => {
      if (isLogin) likeClub({ clubId, queryParams: requestQuery })
      else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
    },
    [likeClub, query, isLogin],
  )

  const handleClubClick = (club: ClubInterface) => {
    // TODO: 클럽 상세 페이지
    console.log(club)
  }

  return (
    <div className={s.ClubCardWrapper}>
      {data?.length ? (
        data.map(club => (
          <ClubCard
            key={`clubId-${club.clubId}`}
            clubData={club}
            handleLikeClick={handleLikeClick}
            handleClubClick={handleClubClick}
          />
        ))
      ) : (
        <div className={s.NoSearchResult}>No search results</div>
      )}
    </div>
  )
}
export default ClubList
