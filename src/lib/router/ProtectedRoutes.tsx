import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  // 사용자가 인증 되었는지 받아오는 로직
  const isLoggedIn = true

  return isLoggedIn ? <Outlet /> : <Navigate to={'/home'} />
}

export default ProtectedRoutes
