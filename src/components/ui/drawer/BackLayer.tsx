import { css } from '@styled-system/css'
import { motion } from 'framer-motion'

interface BackLayerProps {
  close: () => void
}
const BackLayer = ({ close }: BackLayerProps) => {
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
      })}
      variants={{ opened: { opacity: 0.24 }, closed: { opacity: 0 } }}
      initial={'closed'}
      animate={'opened'}
      exit={'closed'}
      onClick={close}
    />
  )
}

export default BackLayer
