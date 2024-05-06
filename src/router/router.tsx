import { RouteObject } from 'react-router-dom'

import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/Login'
import MyPage from '@/pages/MyPage'
import TimeTablePage from '@/pages/TimeTablePage'
import ProtectedRoutes from '@/router/ProtectedRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <ProtectedRoutes />,
        children: [
          { path: '', element: <MyPage /> },
          { path: 'timetable', element: <TimeTablePage /> },
        ],
      },
      { path: 'home', element: <LandingPage /> },
      { path: 'login', element: <Login /> },
    ],
  },
]

export default routes
