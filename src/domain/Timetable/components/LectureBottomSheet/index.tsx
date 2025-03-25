import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import * as s from './style.css'

import AddClass from '@/domain/Timetable/components/LectureBottomSheet/AddClass'
import AddOnMyOwn from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn'
import { BOTTOM_SHEET_DEFAULT_OPEN_HEIGHT } from '@/domain/Timetable/components/LectureBottomSheet/constants'
import { LectureBottomSheetContext } from '@/domain/Timetable/components/LectureBottomSheet/context'
import DrawerHandle from '@/domain/Timetable/components/LectureBottomSheet/DrawerHandle'
import { isBottomSheetVisible } from '@/domain/Timetable/store/bottomSheetVisibility'
import { SemesterType } from '@/types/timetable'

interface LectureBottomSheetProps {
  timetableId: number
  year: string
  semester: SemesterType
}
const LectureBottomSheet = ({ timetableId, year, semester }: LectureBottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetState, setSheetState] = useState<'class' | 'schedule' | null>(null)
  const isVisible = useAtomValue(isBottomSheetVisible)

  const openHeight = Math.min(window.innerHeight * 0.5, BOTTOM_SHEET_DEFAULT_OPEN_HEIGHT)

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
  const closeDrawer = () => setIsOpen(false)

  return createPortal(
    <LectureBottomSheetContext.Provider value={{ timetableId }}>
      {isOpen && <button className={s.CloseArea} onClick={closeDrawer} />}
      <motion.div
        className={s.Wrapper}
        animate={isOpen ? 'open' : 'close'}
        initial={{ bottom: 0 }}
        variants={{ open: { bottom: `${openHeight}px` }, close: { bottom: 0 } }}
      >
        <DrawerHandle isVisible={!isOpen && isVisible} handleDrawer={handleDrawer} />
        <div className={s.Contents} style={{ height: openHeight }}>
          {sheetState === 'schedule' ? (
            <AddOnMyOwn closeModal={closeDrawer} />
          ) : (
            <AddClass timetableId={timetableId} year={year} semester={semester} closeModal={closeDrawer} />
          )}
        </div>
      </motion.div>
    </LectureBottomSheetContext.Provider>,
    document.body,
  )
}

export default LectureBottomSheet
