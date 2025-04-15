import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'

import AddOnMyOwn from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn'
import { GridType } from '@/types/timetable'

interface EditScheduleProps {
  timetableId: number
  data: GridType
  closeScheduleModal: () => void
}
const EditSchedule = ({ timetableId, data, closeScheduleModal }: EditScheduleProps) => {
  return (
    <div
      className={cx(
        shadow(),
        css({
          bgColor: '#FFFFFFCC',
          w: 'calc(100vw - 298px)',
          h: 'calc(50vh - 20px)',
          backdropFilter: 'blur(25px)',
          rounded: 50,
          px: 26,
          pt: 10,
          pb: 3.5,
        }),
      )}
    >
      <AddOnMyOwn
        timetableId={timetableId}
        closeModal={closeScheduleModal}
        prevValues={{
          title: data.title,
          day: data.day,
          location: data.location ?? undefined,
          startTime: data.startTime,
          endTime: data.endTime,
          scheduleId: data.scheduleId,
        }}
      />
    </div>
  )
}

export default EditSchedule
