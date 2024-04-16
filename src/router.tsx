import { RouteObject } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Login from './pages/Login'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <MyPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]

export default routes
