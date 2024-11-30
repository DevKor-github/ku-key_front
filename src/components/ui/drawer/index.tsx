import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

import BackLayer from '@/components/ui/drawer/BackLayer'
import DrawerBody from '@/components/ui/drawer/DrawerBody'

interface DrawerProps {
  isOpen: boolean
  close: () => void
  children: ReactNode
}
/**
 * **Mobile View Bottom Sheet Component**
 *
 * 이미 Timetable에서 사용하는 고유한 UI 이름을 BottomSheet으로 명명하여
 * Drawer로 사용
 *
 */
const Drawer = ({ isOpen, close, children }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <BackLayer close={close} />
          <DrawerBody close={close}>{children}</DrawerBody>
        </>
      )}
    </AnimatePresence>
  )
}

export default Drawer
