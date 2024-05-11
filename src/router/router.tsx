import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import FriendTimeTablePage from '@/pages/FriendTimeTablePage'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/Login'
import MyPage from '@/pages/MyPage'
import MyTimeTablePage from '@/pages/MyTimeTablePage'
import TimeTablePage from '@/pages/TimeTablePage'
import ProtectedRoutes from '@/router/ProtectedRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <ProtectedRoutes />,
        children: [
          { path: '', element: <MyPage /> },
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
    ],
  },
]

export default routes
