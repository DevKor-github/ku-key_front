import { css } from '@styled-system/css'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { createPortal } from 'react-dom'

import BackLayer from '@/components/ui/drawer/BackLayer'

interface DrawerProps {
  isOpen: boolean
  openHeight: number
  close: () => void
}
/**
 * **Mobile View Bottom Sheet Component**
 *
 * 이미 Timetable에서 사용하는 고유한 UI 이름을 BottomSheet으로 명명하여
 * Drawer로 사용
 */
const Drawer = ({ isOpen, openHeight, close }: DrawerProps) => {
  const expandedHeight = useMemo(() => Math.min(openHeight, window.innerHeight), [openHeight])

  return createPortal(
    <>
      <BackLayer isOpen={isOpen} close={close} />
      {isOpen && (
        <motion.div
          className={css({
            pos: 'fixed',
            top: '100dvh',
            left: 0,
            w: 'full',
            h: '100dvh',
            bgColor: 'white',
            rounded: '20px 20px 0 0',
            willChange: 'transform',
            p: '15px 20px 40px 20px',
          })}
          drag={'y'}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.4}
          animate={{ top: isOpen ? `calc(100dvh - ${expandedHeight}px)` : '100dvh' }}
        >
          <div>For Test</div>
        </motion.div>
      )}
    </>,
    document.body,
  )
}

export default Drawer
