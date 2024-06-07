import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { Navigate, Outlet } from 'react-router-dom'

import NotVerified from '@/components/register/NotVerified'
import { useAuthState } from '@/util/useAuthState'
const ProtectedRoutes = () => {
  // 사용자가 인증 되었는지 받아오는 로직
  const isLoggedIn = useIsAuthenticated()
  const auth = useAuthState()
  if (isLoggedIn && auth.verified === false) return <NotVerified />
  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
