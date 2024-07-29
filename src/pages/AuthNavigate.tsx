import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/util/auth/useAuth'

const AuthNavigate = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth().isAuthenticated
  const navigate = useNavigate()
  useEffect(() => {
    if (auth) navigate('/')
  }, [auth, navigate])
  return <>{children}</>
}

export default AuthNavigate
