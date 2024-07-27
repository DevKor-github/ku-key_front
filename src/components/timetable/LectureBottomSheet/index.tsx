import { css } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import AddClass from '@/components/timetable/LectureBottomSheet/AddClass'
import Drawer from '@/components/timetable/LectureBottomSheet/Drawer'

interface LectureBottomSheetProps {
  timetableId: number
}
const LectureBottomSheet = ({ timetableId }: LectureBottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)

  const handleDrawer = useCallback(
    (type: 'chevron' | 'class' | 'own') => {
      switch (type) {
        case 'chevron':
          setIsOpen(prev => !prev)
          if (sheetState === null) {
            setSheetState('class')
          }
          break
        case 'class':
          setIsOpen(true)
          setSheetState('class')
          break
        case 'own':
          setIsOpen(true)
          setSheetState('schedule')
          break
      }
    },
    [sheetState],
  )

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
          display: { base: 'flex', mdDown: 'none' },
          justifyContent: 'center',
          zIndex: 100,
        })}
        animate={isOpen ? 'open' : 'close'}
        initial={{ top: '100vh' }}
        variants={{ open: { top: '50vh' }, close: { top: '100vh' } }}
      >
        <Drawer isOpen={isOpen} sheetState={sheetState} handleDrawer={handleDrawer} />
        <div
          className={css({
            bgColor: '#FFFFFF80',
            w: 'calc(100vw - 298px)',
            h: 'calc(50vh - 20px)',
            backdropFilter: 'blur(20px)',
            rounded: 50,
            boxShadow: '0px 0px 4px 0px #00000040',
            px: 26,
            pt: 10,
            pb: 3.5,
          })}
        >
          {sheetState === 'schedule' ? <div>스케쥴 직접 추가</div> : <AddClass timetableId={timetableId} />}
        </div>
      </motion.div>
    </>
  )
}

export default LectureBottomSheet