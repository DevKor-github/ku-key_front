import { css } from '@styled-stytem/css'
import { isAxiosError } from 'axios'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import { usePostSchedule } from '@/api/hooks/schedule'
import AddClass from '@/components/timetable/LectureBottomSheet/AddClass'
import AddOnMyOwn, { AddOnMyOwnForm } from '@/components/timetable/LectureBottomSheet/AddOnMyOwn'
import Drawer from '@/components/timetable/LectureBottomSheet/Drawer'

interface LectureBottomSheetProps {
  timetableId: number
  visible: boolean
}
const LectureBottomSheet = ({ timetableId, visible }: LectureBottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)
  const { mutate: postSchedule } = usePostSchedule()

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

  const addOnMyOwnHandler = (data: AddOnMyOwnForm) => {
    postSchedule(
      { timetableId, ...data },
      {
        onError: error => {
          if (isAxiosError(error)) alert(error.response?.data.message)
        },
      },
    )
  }

  return (
    <>
      {isOpen && (
        <button
          className={css({
            position: 'fixed',
            w: '100vw',
            h: '100vh',
            zIndex: 99,
            top: 0,
            left: 0,
          })}
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
        <Drawer isOpen={isOpen} sheetState={sheetState} handleDrawer={handleDrawer} visible={visible} />
        <div
          className={css({
            bgColor: '#FFFFFF80',
            w: 'calc(100vw - 298px)',
            h: 'calc(50vh - 20px)',
            backdropFilter: 'blur(25px)',
            rounded: 50,
            boxShadow: '0px 0px 4px 0px #00000040',
            px: 26,
            pt: 10,
            pb: 3.5,
          })}
        >
          {sheetState === 'schedule' ? (
            <AddOnMyOwn submitHandler={addOnMyOwnHandler} />
          ) : (
            <AddClass timetableId={timetableId} />
          )}
        </div>
      </motion.div>
    </>
  )
}

export default LectureBottomSheet
