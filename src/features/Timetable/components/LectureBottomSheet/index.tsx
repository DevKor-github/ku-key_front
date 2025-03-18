import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import * as s from './style.css'

import { usePostSchedule } from '@/api/hooks/schedule'
import AddOnMyOwn, { AddOnMyOwnForm } from '@/components/timetable/LectureBottomSheet/AddOnMyOwn'
import { isBottomSheetVisible } from '@/domain/Timetable/store/bottomSheetVisibility'
import AddClass from '@/features/Timetable/components/LectureBottomSheet/AddClass'
import { BOTTOM_SHEET_DEFAULT_OPEN_HEIGHT } from '@/features/Timetable/components/LectureBottomSheet/constants'
import DrawerHandle from '@/features/Timetable/components/LectureBottomSheet/DrawerHandle'
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
      {isOpen && <button className={s.CloseArea} onClick={() => setIsOpen(false)} />}
      <motion.div
        className={s.Wrapper}
        animate={isOpen ? 'open' : 'close'}
        initial={{ bottom: 0 }}
        variants={{ open: { bottom: `${openHeight}px` }, close: { bottom: 0 } }}
      >
        <DrawerHandle isVisible={!isOpen && isVisible} handleDrawer={handleDrawer} />
        <div className={s.Contents} style={{ height: openHeight }}>
          {sheetState === 'schedule' ? (
            <AddOnMyOwn submitHandler={addOnMyOwnHandler} />
          ) : (
            <AddClass timetableId={timetableId} year={year} semester={semester} closeModal={() => setIsOpen(false)} />
          )}
        </div>
      </motion.div>
    </>,
    document.body,
  )
}

export default LectureBottomSheet
