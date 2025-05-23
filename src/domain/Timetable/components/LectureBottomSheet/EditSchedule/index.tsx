import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

import * as s from './style.css'

import AddOnMyOwn from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn'
import { BOTTOM_SHEET_DEFAULT_OPEN_HEIGHT } from '@/domain/Timetable/components/LectureBottomSheet/constants'
import { GridType } from '@/types/timetable'

interface Props {
  timetableId: number
  data: GridType
  closeEditSheet: () => void
}
const EditSchedule = ({ timetableId, data, closeEditSheet }: Props) => {
  const openHeight = Math.min(window.innerHeight * 0.5, BOTTOM_SHEET_DEFAULT_OPEN_HEIGHT)

  return createPortal(
    <>
      <button className={s.CloseArea} onClick={closeEditSheet} />
      <motion.div
        className={s.Wrapper}
        animate={{ bottom: `${openHeight}px` }}
        initial={{ bottom: 0 }}
        exit={{ bottom: 0 }}
      >
        <div className={s.Contents} style={{ height: openHeight }}>
          <AddOnMyOwn
            timetableId={timetableId}
            closeModal={closeEditSheet}
            prevValues={{ ...data, location: data.location ?? undefined }}
          />
        </div>
      </motion.div>
    </>,
    document.body,
  )
}
export default EditSchedule
