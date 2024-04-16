import { RouteObject } from 'react-router-dom'
import MyPage from '@/pages/MyPage'
import Login from '@/pages/Login'
import LandingPage from '@/pages/LandingPage'
import ProtectedRoutes from './ProtectedRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <ProtectedRoutes />,
        children: [{ path: '', element: <MyPage /> }],
      },
      { path: 'home', element: <LandingPage /> },
      { path: 'login', element: <Login /> },
    ],
  },
]

export default routes
