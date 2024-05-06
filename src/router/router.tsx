import { RouteObject } from 'react-router-dom'
import MyPage from '@/pages/MyPage'
import Login from '@/pages/Login'
import LandingPage from '@/pages/LandingPage'
import ProtectedRoutes from './ProtectedRoutes'
import TimeTablePage from '@/pages/TimeTablePage'

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
