import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const HeaderBtnStyle = cva({
  base: {
    fontWeight: 500,
    fontSize: 18,
    py: 3.5,
    px: 7,
    rounded: 'full',
    cursor: 'pointer',
    backgroundColor: 'rgba(256, 256, 256, 0)',
    color: 'darkGray.2',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0)',
    transition: 'all 0.256s',
    _hover: {
      color: 'red.1',
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'bg.red.1',
        color: 'red.1',
        boxShadow: '0px 0px 4px 0px #A00C0C80',
      },
    },
  },
})

const closeBtnStyle = css({
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
  visible: boolean
}

const Drawer = ({ isOpen, sheetState, handleDrawer, visible }: DrawerProps) => {
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
          gap: 2.5,
          alignItems: 'center',
          backdropFilter: 'blur(20px)',
        }),
        shadow(),
      )}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <motion.button
        className={closeBtnStyle}
        animate={{ rotate: isOpen ? 180 : 0 }}
        onClick={() => handleDrawer('chevron')}
      >
        <ChevronUp size={24} />
      </motion.button>
      <div className={css({ display: 'flex', gap: 2.5 })}>
        <button className={HeaderBtnStyle({ active: sheetState === 'class' })} onClick={() => handleDrawer('class')}>
          Add a class
        </button>
        <button className={HeaderBtnStyle({ active: sheetState === 'schedule' })} onClick={() => handleDrawer('own')}>
          Add on my own
        </button>
      </div>
    </div>
  )
}

export default Drawer
