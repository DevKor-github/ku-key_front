import { toast } from 'sonner'

import * as s from './style.css'

import Toast from '@/components/ui/toast'
import ClubCard from '@/features/Club/components/ClubCard'
import { useGetClubSearch } from '@/features/Club/hooks/useGetClubSearch'
import { usePostClubLike } from '@/features/Club/hooks/usePostClubLike'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { useDeepCompareCallback } from '@/util/hooks/useDeepCompare'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'
import { Fragment } from 'react/jsx-runtime'
import { Responsive } from '@/common/Responsive'

const ClubList = () => {
  const isLogin = useAuth().authState ?? false
  const isDesktop = !useMediaQueryByName('smDown')

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

  return (
    <div className={s.SearchResultWrapper}>
      {isDesktop && query.keyword && <div className={s.KeywordForDesktop}>{`'${query.keyword}' Search Results`}</div>}
      <div className={s.ClubCardWrapper}>
        {data?.length ? (
          data.map((club, index) => (
            <Fragment key={index}>
              {index !== 0 && <Responsive mobile={<div className={s.ClubLine} />} />}
              <ClubCard clubData={club} handleLikeClick={handleLikeClick} />
            </Fragment>
          ))
        ) : (
          <div className={s.NoSearchResult}>No search results</div>
        )}
      </div>
    </div>
  )
}
export default ClubList
