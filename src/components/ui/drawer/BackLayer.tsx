import { css } from '@styled-system/css'
import { motion } from 'framer-motion'

interface BackLayerProps {
  isOpen: boolean
  close: () => void
}
const BackLayer = ({ isOpen, close }: BackLayerProps) => {
  return (
    <motion.div
      className={css({
        pos: 'fixed',
        top: 0,
        left: 0,
        w: 'full',
        h: '100dvh',
        bgColor: 'black',
        opacity: 0,
        pointerEvents: 'none',
      })}
      variants={{ opened: { opacity: 0.24, pointerEvents: 'all' }, closed: { opacity: 0, pointerEvents: 'none' } }}
      animate={isOpen ? 'opened' : 'closed'}
      onClick={close}
    />
  )
}

export default BackLayer
