import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import MainCommunityPage from '@/pages/CommunityPage'
import BoardPage from '@/pages/CommunityPage/BoardPage'
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
            path: 'community',
            element: <MainCommunityPage />,
          },
          {
            path: 'community/board/:boardName',
            element: <BoardPage />,
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
