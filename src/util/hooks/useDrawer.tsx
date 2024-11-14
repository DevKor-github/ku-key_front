import { useState } from 'react'

import Drawer from '@/components/ui/drawer'
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

  const drawer = () => <Drawer isOpen={isOpen} openHeight={100} close={close} />

  return { Drawer: drawer, open, close }
}

export default useDrawer
