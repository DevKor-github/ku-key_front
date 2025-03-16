import {
  BoardPage,
  ClubDetailPage,
  ClubPage,
  CourseInfoPage,
  CourseReviewPage,
  FriendPage,
  FriendTimetablePage,
  HotBoardPage,
  MainCommunityPage,
  MyPage,
  MyTimetablePage,
  PostViewPage,
  ReviewDetailPage,
  ReviewPage,
  SchedulePage,
  TimetablePage,
  WritePostPage,
  WriteReviewPage,
} from '@/lib/router/lazy-route'
import CommunityAllPage from '@/pages/Community/All'
import HomePage from '@/pages/Home'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/LoginPage'
import PasswordResetPage from '@/pages/PasswordResetPage'
import RegisterPage from '@/pages/RegisterPage'

export const routeConfig = {
  // 메인 페이지
  LandingPage: { path: '/', element: <LandingPage />, params: [] },
  HomePage: { path: 'home', element: <HomePage />, params: [] },

  // 인증 관련
  Login: { path: 'login', element: <Login />, params: [] },
  RegisterPage: { path: 'register', element: <RegisterPage />, params: [] },
  PasswordResetPage: { path: 'password-reset', element: <PasswordResetPage />, params: [] },

  // 마이페이지
  MyPage: { path: 'mypage', element: <MyPage />, params: [] },

  // 시간표
  TimetablePage: { path: '/timetable', element: <TimetablePage />, params: [] },
  MyTimetablePage: { path: '/timetable', element: <MyTimetablePage />, params: [] },
  FriendPage: { path: '/timetable/friend', element: <FriendPage />, params: [] },
  FriendTimetablePage: {
    path: 'timetable/friend/:userHandler',
    params: ['userHandler'],
    element: <FriendTimetablePage />,
  },

  // 강의 리뷰
  CourseReviewPage: { path: '/course-review', element: <CourseReviewPage />, params: [] },
  CourseInfoPage: { path: '/course-review/info', element: <CourseInfoPage />, params: [] },
  ReviewPage: { path: '/course-review/detail', element: <ReviewPage />, params: [] },
  ReviewDetailPage: { path: '/course-review/review', element: <ReviewDetailPage />, params: [] },
  WriteReviewPage: { path: '/course-review/write', element: <WriteReviewPage />, params: [] },

  // 커뮤니티
  MainCommunityPage: { path: '/community', element: <MainCommunityPage />, params: [] },
  CommunityAllPage: { path: '/community/all', element: <CommunityAllPage />, params: [] },
  WritePostPage: {
    path: '/community/action/:type/post/:boardName',
    params: ['type', 'boardName'],
    element: <WritePostPage />,
  },
  BoardPage: {
    path: '/community/board/:boardName',
    params: ['boardName'],
    element: <BoardPage />,
  },
  HotBoardPage: { path: '/community/board/hotboard', element: <HotBoardPage />, params: [] },
  PostViewPage: {
    path: '/community/:boardName/post/:postId',
    params: ['boardName', 'postId'],
    element: <PostViewPage />,
  },

  // 일정
  SchedulePage: { path: '/calendar', element: <SchedulePage />, params: [] },

  // 동아리
  ClubPage: { path: '/club', element: <ClubPage />, params: [] },
  ClubDetailPage: {
    path: '/club/detail/:clubId',
    params: ['clubId'],
    element: <ClubDetailPage />,
  },
} as const

export type RouteKey = keyof typeof routeConfig

export type RouteParams<T extends RouteKey = RouteKey> = (typeof routeConfig)[T]['params'][number]

// 파라미터 배열을 객체 타입으로 변환하는 타입
export type RouteParamsObject<T extends RouteKey = RouteKey> =
  RouteParams<T> extends never ? undefined : { [K in RouteParams<T>]: string }
