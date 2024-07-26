import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const HeaderBtnStyle = css({
  fontWeight: 500,
  fontSize: 18,
  py: 3.5,
  px: 7,
  rounded: 'full',
  cursor: 'pointer',
  backgroundColor: 'rgba(256, 256, 256, 0)',
  color: '#ACACAC',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0)',
})

const HeaderBtnVariants: Variants = {
  active: {
    backgroundColor: '#FFF4F4',
    color: '#A00C0C',
    boxShadow: '0px 0px 4px 0px #A00C0C80',
  },
  noneActive: {
    backgroundColor: 'rgba(256, 256, 256, 0)',
    color: '#ACACAC',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0)',
  },
}

const closeBtnStyle = css({
  w: 9,
  h: 9,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  rounded: 'full',
  color: 'darkGray.2',
  cursor: 'pointer',
})

interface DrawerProps {
  isOpen: boolean
  sheetState: 'class' | 'schedule' | null
  handleDrawer: (type: 'chevron' | 'class' | 'own') => void
}

const Drawer = ({ isOpen, sheetState, handleDrawer }: DrawerProps) => {
  return (
    <div
      className={cx(
        css({
          position: 'absolute',
          top: -23,
          bgColor: '#FFFFFF80',
          rounded: 'full',
          px: 5,
          py: 2.5,
          display: 'flex',
          gap: 2.5,
          alignItems: 'center',
          backdropFilter: 'blur(20px)',
        }),
        shadow(),
      )}
    >
      <motion.button
        className={closeBtnStyle}
        animate={{ rotate: isOpen ? 180 : 0 }}
        onClick={() => handleDrawer('chevron')}
      >
        <ChevronUp size={18} />
      </motion.button>
      <motion.button
        className={HeaderBtnStyle}
        animate={sheetState === 'class' ? 'active' : 'noneActive'}
        variants={HeaderBtnVariants}
        onClick={() => handleDrawer('class')}
      >
        Add a class
      </motion.button>
      <motion.button
        className={HeaderBtnStyle}
        animate={sheetState === 'schedule' ? 'active' : 'noneActive'}
        variants={HeaderBtnVariants}
        onClick={() => handleDrawer('own')}
      >
        Add on my own
      </motion.button>
    </div>
  )
}

export default Drawer
