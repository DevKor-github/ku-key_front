import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { isAxiosError } from 'axios'
import { motion } from 'framer-motion'

import { usePostSchedule } from '@/api/hooks/schedule'
import AddClass from '@/components/timetable/LectureBottomSheet/AddClass'
import AddOnMyOwn, { AddOnMyOwnForm } from '@/components/timetable/LectureBottomSheet/AddOnMyOwn'
import Drawer from '@/components/timetable/LectureBottomSheet/Drawer'

interface LectureBottomSheetProps {
  timetableId: number
  visible: boolean
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  sheetState: 'class' | 'schedule' | null
  handleDrawer: (type: 'chevron' | 'class' | 'own') => void
}
const LectureBottomSheet = ({
  timetableId,
  visible,
  isOpen,
  sheetState,
  setIsOpen,
  handleDrawer,
}: LectureBottomSheetProps) => {
  const { mutate: postSchedule } = usePostSchedule()

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
