import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/util/auth/useAuth'
const ProtectedRoutes = () => {
  // 사용자가 인증 되었는지 받아오는 로직
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
