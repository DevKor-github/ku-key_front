import { css } from '@styled-system/css'
import { AnimatePresence, motion, PanInfo } from 'framer-motion'
import { ReactNode, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'

import BackLayer from '@/components/ui/drawer/BackLayer'

interface DrawerProps {
  isOpen: boolean
  openHeight: number
  close: () => void
  children: ReactNode
}
/**
 * **Mobile View Bottom Sheet Component**
 *
 * 이미 Timetable에서 사용하는 고유한 UI 이름을 BottomSheet으로 명명하여
 * Drawer로 사용
 */
const Drawer = ({ isOpen, openHeight, close, children }: DrawerProps) => {
  const expandedHeight = useMemo(() => Math.min(openHeight, window.innerHeight), [openHeight])

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offsetThreshold = 150
      const deltaThreshold = 5

      const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold
      const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold

      const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold

      if (!isOverThreshold) return

      info.offset.y >= 0 && close()
    },
    [close],
  )

  return createPortal(
    <AnimatePresence>
      {isOpen && <BackLayer close={close} />}
      <motion.div
        key="drawer_body"
        className={css({
          pos: 'fixed',
          top: '100dvh',
          left: 0,
          w: 'full',
          h: '100dvh',
          bgColor: 'white',
          rounded: '20px 20px 0 0',
          willChange: 'transform',
          pt: '15px',
          zIndex: 101,
          display: 'flex',
          flexDir: 'column',
        })}
        drag={'y'}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.4}
        animate={{ top: isOpen ? `calc(100dvh - ${expandedHeight}px)` : '100dvh' }}
        onDragEnd={onDragEnd}
      >
        <div
          className={css({ bgColor: 'darkGray.2', rounded: 'full', h: 1, w: '49px', alignSelf: 'center', mb: '15px' })}
        />
        {children}
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}

export default Drawer
