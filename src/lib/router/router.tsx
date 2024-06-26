import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ProtectedRoutes from '@/lib/router/ProtectedRoutes'
import FriendTimeTablePage from '@/pages/FriendTimeTablePage'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/LoginPage'
import MyPage from '@/pages/MyPage'
import MyTimeTablePage from '@/pages/MyTimeTablePage'
import RegisterPage from '@/pages/RegisterPage'
import TimeTablePage from '@/pages/TimeTablePage'

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
            element: <TimeTablePage />,
            children: [
              { path: '', element: <MyTimeTablePage /> },
              { path: 'friend', element: <FriendTimeTablePage /> },
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
