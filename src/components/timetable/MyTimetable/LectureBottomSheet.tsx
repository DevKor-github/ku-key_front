import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { motion, Variants } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

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

const LectureBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)

  return (
    <>
      {isOpen && (
        <button
          className={css({ position: 'fixed', w: '100vw', h: '100vh', zIndex: 99, top: 0, left: 0 })}
          onClick={() => setIsOpen(false)}
        />
      )}
      <motion.div
        className={css({
          position: 'fixed',
          w: '100vw',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100,
        })}
        animate={isOpen ? 'open' : 'close'}
        initial={{ top: '100vh' }}
        variants={{ open: { top: '50vh' }, close: { top: '100vh' } }}
      >
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
            onClick={() => {
              setIsOpen(prev => !prev)
              if (sheetState === null) {
                setSheetState('class')
              }
            }}
          >
            <ChevronUp size={18} />
          </motion.button>
          <motion.button
            className={HeaderBtnStyle}
            animate={sheetState === 'class' ? 'active' : 'noneActive'}
            variants={HeaderBtnVariants}
            onClick={() => {
              setIsOpen(true)
              setSheetState('class')
            }}
          >
            Add a class
          </motion.button>
          <motion.button
            className={HeaderBtnStyle}
            animate={sheetState === 'schedule' ? 'active' : 'noneActive'}
            variants={HeaderBtnVariants}
            onClick={() => {
              setIsOpen(true)
              setSheetState('schedule')
            }}
          >
            Add on my own
          </motion.button>
        </div>
        <div
          className={css({
            bgColor: '#FFFFFF80',
            w: 'calc(100vw - 298px)',
            h: 'calc(50vh - 20px)',
            backdropFilter: 'blur(20px)',
            rounded: 50,
            boxShadow: '0px 0px 4px 0px #00000040',
          })}
        >
          <div></div>
          <div>{/* 검색창 */}</div>
          <div></div>
        </div>
      </motion.div>
    </>
  )
}

export default LectureBottomSheet
