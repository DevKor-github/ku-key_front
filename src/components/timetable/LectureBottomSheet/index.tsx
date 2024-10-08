import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { isAxiosError } from 'axios'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { match } from 'ts-pattern'

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
          transform: 'translate3d(0, 100%, 0)',
        })}
        animate={isOpen ? 'open' : 'close'}
        initial={{ bottom: 0 }}
        variants={{ open: { bottom: '400px' }, close: { bottom: 0 } }}
      >
        <Drawer isOpen={isOpen} sheetState={sheetState} handleDrawer={handleDrawer} visible={visible} />
        <div
          className={cx(
            css({
              bgColor: '#FFFFFF80',
              w: '1200px',
              h: '380px',
              backdropFilter: 'blur(25px)',
              rounded: 50,
              px: 26,
              pt: 10,
              pb: 3.5,
            }),
            shadow(),
          )}
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
