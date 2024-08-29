import { useEffect } from 'react'

const useScrollUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export default useScrollUp
