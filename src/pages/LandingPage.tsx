import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  // todo: Landing Page 구현
  useEffect(() => {
    navigate('/home', { replace: true })
  }, [navigate])

  return <div></div>
}

export default LandingPage
