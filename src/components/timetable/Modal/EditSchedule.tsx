import { css } from '@styled-stytem/css'
import { AxiosError } from 'axios'

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
  return (
    <div
      className={css({
        bgColor: '#FFFFFFCC',
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
      <AddOnMyOwn
        submitHandler={(formData: AddOnMyOwnForm) => {
          closeScheduleModal()
          editSchedule(
            { scheduleId: data.scheduleId, timetableId, ...formData },
            {
              onError: error => {
                if (error instanceof AxiosError) alert(error.response?.data.message)
              },
            },
          )
        }}
        prevValue={{ title: data.title, day: data.day, location: data.location }}
      />
    </div>
  )
}

export default EditSchedule
