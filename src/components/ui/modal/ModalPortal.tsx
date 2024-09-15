import { css } from '@styled-system/css'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'

export interface ModalPortalProps {
  children: React.ReactNode
  isOpen: boolean
  selfClose?: boolean
  handleLayoutClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const ModalPortal = ({ children, isOpen, selfClose, handleLayoutClose }: ModalPortalProps) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pos: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backdropBlur: '10',
            bgColor: 'rgba(0,0,0,0.4)',
            w: 'full',
            h: 'full',
            zIndex: 100,
          })}
          transition={{ ease: 'easeInOut' }}
          onClick={e => !selfClose && handleLayoutClose && handleLayoutClose(e)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default ModalPortal
