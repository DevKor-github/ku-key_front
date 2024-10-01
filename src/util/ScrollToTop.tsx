import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()
  const curPath = location.pathname
  const curPathRoot = curPath.split('/')[1]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [curPathRoot])

  return <></>
}

export default ScrollToTop
