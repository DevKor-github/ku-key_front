import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  // 사용자가 인증 되었는지 받아오는 로직
  const isLoggedIn = useIsAuthenticated()

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
