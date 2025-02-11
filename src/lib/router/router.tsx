import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import {
  BoardPage,
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
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import HomePage from '@/pages/Home'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/LoginPage'
import PasswordResetPage from '@/pages/PasswordResetPage'
import RegisterPage from '@/pages/RegisterPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '',
        element: <ProtectedRoutes />,
        children: [
          { path: 'mypage', element: <MyPage /> },
          {
            path: 'timetable',
            element: <TimetablePage />,
            children: [
              { path: '', element: <MyTimetablePage /> },
              {
                path: 'friend',
                element: <FriendPage />,
              },
              { path: 'friend/:userHandler', element: <FriendTimetablePage /> },
            ],
          },
          {
            path: 'course-review',
            element: <CourseReviewPage />,
            children: [
              { path: 'info', element: <CourseInfoPage /> },
              { path: 'detail', element: <ReviewPage /> },
              { path: 'review', element: <ReviewDetailPage /> },
              { path: 'write', element: <WriteReviewPage /> },
            ],
          },
          {
            path: 'community',
            element: <MainCommunityPage />,
          },
          {
            path: 'community/action/:type/post/:boardName',
            element: <WritePostPage />,
          },
          {
            path: 'community/board/:boardName',
            element: <BoardPage />,
          },
          {
            path: 'community/board/hotboard',
            element: <HotBoardPage />,
          },
          {
            path: 'community/:boardName/post/:postId',
            element: <PostViewPage />,
          },
        ],
      },
      { path: 'home', element: <HomePage /> },
      { path: 'calendar', element: <SchedulePage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'password-reset', element: <PasswordResetPage /> },
      { path: 'club', element: <ClubPage /> },
    ],
  },
]

export default routes
