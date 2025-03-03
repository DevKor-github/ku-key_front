import { Suspense, useMemo } from 'react'

import { LoadingSpinner } from '@/components/ui/spinner'
import { BoardQueryParam } from '@/features/Community/CommunitySelectTab'
import CommunityPostAll from '@/features/Community/PostAll'
import CommunityPostByBoard from '@/features/Community/PostByBoard'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const CommunityPostDetail = () => {
  const [queryParam] = useQueryParams<BoardQueryParam>()
  const { board } = queryParam

  const renderComponent = useMemo(() => {
    if (board === 'All') {
      return <CommunityPostAll />
    }
    return <CommunityPostByBoard />
  }, [board])

  return <Suspense fallback={<LoadingSpinner />}>{renderComponent}</Suspense>
}

export default CommunityPostDetail
