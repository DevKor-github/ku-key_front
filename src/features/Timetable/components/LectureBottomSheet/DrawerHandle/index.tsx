import { AnimatePresence, motion } from 'framer-motion'

import * as s from './style.css'

interface Props {
  isVisible: boolean
  handleDrawer: (type: 'chevron' | 'class' | 'own') => void
}

const DrawerHandle = ({ isVisible, handleDrawer }: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className={s.Container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className={s.SelectButton} onClick={() => handleDrawer('class')}>
            Add a class
          </button>
          <button className={s.SelectButton} onClick={() => handleDrawer('own')}>
            Add on my own
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DrawerHandle
