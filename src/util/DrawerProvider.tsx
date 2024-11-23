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
  const [contents, setContents] = useState<ReactNode | null>(null)
  const isOpen = contents !== null

  const { lockScroll: lock, unlockScroll: unlock } = useScrollLock()

  const open = (element: ReactNode, option?: DrawerOpenOption) => {
    const { lockScroll = true } = option ?? {}
    setContents(element)
    if (lockScroll) lock()
  }

  const close = () => {
    setContents(null)
    unlock()
  }

  return (
    <DrawerContext.Provider value={{ open, close }}>
      {children}
      <Drawer isOpen={isOpen} close={close}>
        {contents}
      </Drawer>
    </DrawerContext.Provider>
  )
}
