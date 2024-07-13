import { Navigate, Outlet } from 'react-router-dom'

import NotVerified from '@/components/register/NotVerified'
import { useAuth } from '@/util/auth/useAuth'
const ProtectedRoutes = () => {
  // 사용자가 인증 되었는지 받아오는 로직
  const { isAuthenticated, authState } = useAuth()
  if (isAuthenticated && !authState) return <NotVerified />
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
