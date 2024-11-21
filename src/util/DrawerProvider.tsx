import { createContext, PropsWithChildren, ReactNode, useState } from 'react'

import Drawer from '@/components/ui/drawer'
import useScrollLock from '@/util/hooks/useScrollLock'

export const DrawerContext = createContext<{
  open: (element: ReactNode) => void
  close: () => void
} | null>(null)

interface DrawerOpenOption {
  lockScroll?: boolean
  // TODO: Add Animation Opt or something
}

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [drawer, setDrawer] = useState<ReactNode | null>(null)
  const isOpen = drawer !== null

  const { lockScroll: lock, unlockScroll: unlock } = useScrollLock()

  // TODO: Add async open & async close
  const open = (element: ReactNode, option?: DrawerOpenOption) => {
    const { lockScroll = true } = option ?? {}
    setDrawer(element)
    if (lockScroll) lock()
  }

  const close = () => {
    setDrawer(null)
    unlock()
  }

  return (
    <DrawerContext.Provider value={{ open, close }}>
      {children}
      {/* TODO: 임의 높이 제거 */}
      <Drawer isOpen={isOpen} close={close} openHeight={390}>
        {drawer}
      </Drawer>
    </DrawerContext.Provider>
  )
}
