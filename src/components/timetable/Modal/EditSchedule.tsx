import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { useCallback } from 'react'

import { usePatchSchedule } from '@/api/hooks/schedule'
import AddOnMyOwn, { AddOnMyOwnForm } from '@/components/timetable/LectureBottomSheet/AddOnMyOwn'
import { GridType } from '@/types/timetable'

interface EditScheduleProps {
  timetableId: number
  data: GridType
  closeScheduleModal: () => void
}
const EditSchedule = ({ timetableId, data, closeScheduleModal }: EditScheduleProps) => {
  const { mutate: editSchedule } = usePatchSchedule()

  const handleSubmit = useCallback(
    (formData: AddOnMyOwnForm) => {
      closeScheduleModal()
      editSchedule({ scheduleId: data.scheduleId, timetableId, ...formData })
    },
    [closeScheduleModal, editSchedule, timetableId, data.scheduleId],
  )

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
        submitHandler={handleSubmit}
        prevValue={{ title: data.title, day: data.day, location: data.location ?? undefined }}
      />
    </div>
  )
}

export default EditSchedule
