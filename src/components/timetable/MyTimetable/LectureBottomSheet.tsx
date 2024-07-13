import { css } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const HeaderBtnStyle = css({
  color: 'lightGray.2',
  fontWeight: 500,
  fontSize: 18,
  py: 3.5,
  px: 7,
  border: '{colors.lightGray.2} 1px solid',
  rounded: 'full',
  cursor: 'pointer',
})

const LectureBottomSheet = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  return (
    <motion.div
      className={css({
        position: 'fixed',
        bottom: 8,
        left: '50%',
        zIndex: 100,
        bgColor: '#6B6B6B80',
        rounded: 'full',
        px: 5,
        py: 2.5,
        display: 'flex',
        gap: 2.5,
        alignItems: 'center',
        transform: 'translate3d(-50%, 0, 0)',
      })}
    >
      <motion.button
        className={css({
          w: 9,
          h: 9,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          rounded: 'full',
          bgColor: 'lightGray.2',
          color: 'darkGray.2',
          cursor: 'pointer',
        })}
        onClick={() => setIsSheetOpen(prev => !prev)}
        animate={{ rotate: isSheetOpen ? 45 : 0 }}
      >
        <Plus size={18} />
      </motion.button>
      <button className={HeaderBtnStyle}>Add a class</button>
      <button className={HeaderBtnStyle}>Add on my own</button>
    </motion.div>
  )
}

export default LectureBottomSheet
