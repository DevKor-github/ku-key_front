import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import { routeConfig } from '@/lib/router/routeConfig'
import LandingPage from '@/pages/LandingPage'

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
          { ...routeConfig.MyPage },
          {
            ...routeConfig.TimetablePage,
            children: [
              {
                ...routeConfig.MyTimetablePage,
                path: routeConfig.MyTimetablePage.path.replace('/timetable', ''),
              },
              {
                ...routeConfig.FriendPage,
                path: routeConfig.FriendPage.path.replace('/timetable/', ''),
              },
              {
                ...routeConfig.FriendTimetablePage,
                path: routeConfig.FriendTimetablePage.path.replace('/timetable/', ''),
              },
            ],
          },
          {
            ...routeConfig.CourseReviewPage,
            children: [
              {
                ...routeConfig.CourseInfoPage,
                path: routeConfig.CourseInfoPage.path.replace('/course-review/', ''),
              },
              {
                ...routeConfig.ReviewPage,
                path: routeConfig.ReviewPage.path.replace('/course-review/', ''),
              },
              {
                ...routeConfig.ReviewDetailPage,
                path: routeConfig.ReviewDetailPage.path.replace('/course-review/', ''),
              },
              {
                ...routeConfig.WriteReviewPage,
                path: routeConfig.WriteReviewPage.path.replace('/course-review/', ''),
              },
            ],
          },
          { ...routeConfig.MainCommunityPage },
          { ...routeConfig.CommunityAllPage },
          { ...routeConfig.WritePostPage },
          { ...routeConfig.BoardPage },
          { ...routeConfig.HotBoardPage },
          { ...routeConfig.PostViewPage },
        ],
      },
      { ...routeConfig.HomePage },
      { ...routeConfig.SchedulePage },
      { ...routeConfig.Login },
      { ...routeConfig.RegisterPage },
      { ...routeConfig.PasswordResetPage },
      {
        path: 'club',
        children: [
          {
            ...routeConfig.ClubPage,
            path: routeConfig.ClubPage.path.replace('/club', ''),
          },
          {
            ...routeConfig.ClubDetailPage,
            path: routeConfig.ClubDetailPage.path.replace('/club/', ''),
          },
        ],
      },
    ],
  },
]

export default routes
