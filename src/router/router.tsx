import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/Login'
import MyPage from '@/pages/MyPage'
import RegisterPage from '@/pages/RegisterPage'
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
          { path: 'timetable', element: <TimeTablePage /> },
        ],
      },
      { path: 'home', element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]

export default routes
