import { ComponentType, lazy, Suspense } from 'react'

import LoadingSpinner from '@/components/ui/spinner/inde'

const withSuspense = (LazyComponent: ComponentType) => {
  return () => (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  )
}

export const ClubPage = withSuspense(lazy(() => import('@/pages/ClubPage')))
export const MainCommunityPage = withSuspense(lazy(() => import('@/pages/CommunityPage')))
export const BoardPage = withSuspense(lazy(() => import('@/pages/CommunityPage/BoardPage')))
export const HotBoardPage = withSuspense(lazy(() => import('@/pages/CommunityPage/HotBoardPage')))
export const PostViewPage = withSuspense(lazy(() => import('@/pages/CommunityPage/PostViewPage')))
export const WritePostPage = withSuspense(lazy(() => import('@/pages/CommunityPage/WritePostPage')))
export const CourseReviewPage = withSuspense(lazy(() => import('@/pages/CourseReviewPage')))
export const CourseInfoPage = withSuspense(lazy(() => import('@/pages/CourseReviewPage/CourseInfoPage')))
export const ReviewDetailPage = withSuspense(lazy(() => import('@/pages/CourseReviewPage/ReviewDetailPage')))
export const ReviewPage = withSuspense(lazy(() => import('@/pages/CourseReviewPage/ReviewPage')))
export const WriteReviewPage = withSuspense(lazy(() => import('@/pages/CourseReviewPage/WriteReviewPage')))
export const MyPage = withSuspense(lazy(() => import('@/pages/MyPage')))
export const SchedulePage = withSuspense(lazy(() => import('@/pages/SchedulePage')))
export const TimetablePage = withSuspense(lazy(() => import('@/pages/TimetablePage')))
export const FriendPage = withSuspense(lazy(() => import('@/pages/TimetablePage/FriendPage')))
export const FriendTimetablePage = withSuspense(lazy(() => import('@/pages/TimetablePage/FriendTimetablePage')))
export const MyTimetablePage = withSuspense(lazy(() => import('@/pages/TimetablePage/MyTimetablePage')))
