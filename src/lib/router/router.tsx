import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import CourseReviewPage from '@/pages/CourseReviewPage'
import CourseInfoPage from '@/pages/CourseReviewPage/CourseInfoPage'
import ReviewDetailPage from '@/pages/CourseReviewPage/ReviewDetailPage'
import ReviewPage from '@/pages/CourseReviewPage/ReviewPage'
import WriteReviewPage from '@/pages/CourseReviewPage/WriteReviewPage'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/LoginPage'
import MyPage from '@/pages/MyPage'
import RegisterPage from '@/pages/RegisterPage'
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
        ],
      },
      { path: 'home', element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]

export default routes
