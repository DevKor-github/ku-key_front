import { useState } from 'react'

import useScrollLock from '@/util/hooks/useScrollLock'

const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()

  const open = () => {
    setIsOpen(true)
    lockScroll()
  }
  const close = () => {
    setIsOpen(false)
    unlockScroll()
  }

  return { isOpen, open, close }
}

export default useDrawer
