import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import { usePostSchedule } from '@/api/hooks/schedule'
import AddClass from '@/components/timetable/LectureBottomSheet/AddClass'
import AddOnMyOwn, { AddOnMyOwnForm } from '@/components/timetable/LectureBottomSheet/AddOnMyOwn'
import Drawer from '@/components/timetable/LectureBottomSheet/Drawer'
import { SemesterType } from '@/types/timetable'

interface LectureBottomSheetProps {
  timetableId: number
  year: string
  semester: SemesterType
  visible: boolean
}
const LectureBottomSheet = ({ timetableId, visible, year, semester }: LectureBottomSheetProps) => {
  // TODO: useOverlay로 Refactor
  const [isOpen, setIsOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)

  const openHeight = Math.min(window.innerHeight * 0.5, 520)

  const { mutate: postSchedule } = usePostSchedule()

  const handleDrawer = useCallback(
    (type: 'chevron' | 'class' | 'own') => {
      match(type)
        .with('chevron', () => {
          setIsOpen(prev => !prev)
          if (sheetState === null) {
            setSheetState('class')
          }
        })
        .with('class', () => {
          setIsOpen(true)
          setSheetState('class')
        })
        .with('own', () => {
          setIsOpen(true)
          setSheetState('schedule')
        })
    },
    [sheetState],
  )

  const addOnMyOwnHandler = (data: AddOnMyOwnForm) => {
    postSchedule({ timetableId, ...data })
  }

  return createPortal(
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
          transform: 'translate3d(0, 100%, 0)',
        })}
        animate={isOpen ? 'open' : 'close'}
        initial={{ bottom: 0 }}
        variants={{ open: { bottom: `${openHeight + 20}px` }, close: { bottom: 0 } }}
      >
        <Drawer isOpen={isOpen} sheetState={sheetState} handleDrawer={handleDrawer} visible={visible} />
        <div
          className={cx(
            css({
              bgColor: '#FFFFFF80',
              w: '1200px',
              backdropFilter: 'blur(25px)',
              rounded: 50,
              px: 26,
              pt: 10,
              pb: 3.5,
            }),
            shadow(),
          )}
          style={{ height: openHeight }}
        >
          {sheetState === 'schedule' ? (
            <AddOnMyOwn submitHandler={addOnMyOwnHandler} />
          ) : (
            <AddClass timetableId={timetableId} year={year} semester={semester} />
          )}
        </div>
      </motion.div>
    </>,
    document.body,
  )
}

export default LectureBottomSheet
