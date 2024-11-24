import { createContext, PropsWithChildren, ReactNode, useState } from 'react'

import Drawer from '@/components/ui/drawer'
import useScrollLock from '@/util/hooks/useScrollLock'

interface DrawerOpenProps {
  element: ReactNode
  option?: DrawerOpenOption
}
interface DrawerOpenOption {
  lockScroll?: boolean
  // TODO: Add Animation Opt or something
}

export const DrawerContext = createContext<{
  open: (props: DrawerOpenProps) => void
  close: () => void
} | null>(null)

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [contents, setContents] = useState<ReactNode | null>(null)
  const isOpen = contents !== null

  const { lockScroll: lock, unlockScroll: unlock } = useScrollLock()

  const open = ({ element, option = {} }: DrawerOpenProps) => {
    const { lockScroll = true } = option
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
