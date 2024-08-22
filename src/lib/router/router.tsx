import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import MainCommunityPage from '@/pages/CommunityPage'
import BoardPage from '@/pages/CommunityPage/BoardPage'
import HotBoardPage from '@/pages/CommunityPage/HotBoardPage'
import PostViewPage from '@/pages/CommunityPage/PostViewPage'
import WritePostPage from '@/pages/CommunityPage/WritePostPage'
import CourseReviewPage from '@/pages/CourseReviewPage'
import CourseInfoPage from '@/pages/CourseReviewPage/CourseInfoPage'
import ReviewDetailPage from '@/pages/CourseReviewPage/ReviewDetailPage'
import ReviewPage from '@/pages/CourseReviewPage/ReviewPage'
import WriteReviewPage from '@/pages/CourseReviewPage/WriteReviewPage'
import HomePage from '@/pages/HomePage'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/LoginPage'
import MyPage from '@/pages/MyPage'
import RegisterPage from '@/pages/RegisterPage'
import SchedulePage from '@/pages/SchedulePage'
import TimetablePage from '@/pages/TimetablePage'
import FriendPage from '@/pages/TimetablePage/FriendPage'
import FriendTimetablePage from '@/pages/TimetablePage/FriendTimetablePage'
import MyTimetablePage from '@/pages/TimetablePage/MyTimetablePage'

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
              { path: 'info/:courseCode/:prof', element: <CourseInfoPage /> },
              { path: 'detail/:courseCode/:prof', element: <ReviewPage /> },
              { path: 'review/:courseCode/:prof/:reviewId', element: <ReviewDetailPage /> },
              { path: 'write/:courseCode/:prof', element: <WriteReviewPage /> },
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
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]

export default routes
