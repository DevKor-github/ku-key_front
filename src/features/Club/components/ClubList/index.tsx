import { Fragment } from 'react/jsx-runtime'
import { toast } from 'sonner'

import * as s from './style.css'

import NoSearchResult from '@/assets/no-search-result.png'
import { Responsive } from '@/common/Responsive'
import Toast from '@/components/ui/toast'
import { useGetClubSearch } from '@/domain/Club/hooks/useGetClubSearch'
import { usePostClubLike } from '@/domain/Club/hooks/usePostClubLike'
import ClubCard from '@/features/Club/components/ClubCard'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { ClubSearchParams } from '@/types/club'
import { useAuth } from '@/util/auth/useAuth'
import { useDeepCompareCallback } from '@/util/hooks/useDeepCompare'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

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
      if (isLogin) likeClub({ clubId })
      else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
    },
    [likeClub, isLogin],
  )

  return (
    <div className={s.SearchResultWrapper}>
      {isDesktop && query.keyword && <div className={s.KeywordForDesktop}>{`'${query.keyword}' Search Results`}</div>}
      {data?.length ? (
        <div className={s.ClubCardWrapper}>
          {data.map((club, index) => (
            <Fragment key={index}>
              {index !== 0 && <Responsive mobile={<div className={s.ClubLine} />} />}
              <ClubCard clubData={club} handleLikeClick={handleLikeClick} />
            </Fragment>
          ))}
        </div>
      ) : (
        <div className={s.NoSearchResult}>
          <img src={NoSearchResult} alt="No club search result" className={s.NoSearchResultImage} />
          <p>No search results</p>
        </div>
      )}
    </div>
  )
}
export default ClubList
