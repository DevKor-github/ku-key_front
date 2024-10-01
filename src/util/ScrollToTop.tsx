import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()
  const curPath = location.pathname

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [curPath])

  return <></>
}

export default ScrollToTop
