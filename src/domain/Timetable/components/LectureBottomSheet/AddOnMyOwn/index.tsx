import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import * as s from './style.css'

import { usePostSchedule } from '@/api/hooks/schedule'
import { AddOnMyOwnForm } from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn/types'
import CloseButton from '@/domain/Timetable/components/LectureBottomSheet/CloseButton'
import { LectureBottomSheetContext } from '@/domain/Timetable/components/LectureBottomSheet/context'

interface Props {
  closeModal: () => void
  prevValue?: AddOnMyOwnForm
}
const AddOnMyOwn = ({
  closeModal,
  prevValue = { title: '', day: 'Mon', startTime: '09:00:00', endTime: '09:00:00', location: undefined },
}: Props) => {
  const timetableId = useContext(LectureBottomSheetContext)?.timetableId
  const { mutate: postSchedule } = usePostSchedule()
  const { handleSubmit } = useForm<AddOnMyOwnForm>({
    defaultValues: prevValue,
    mode: 'onSubmit',
  })

  const onSubmit = (data: AddOnMyOwnForm) => {
    timetableId !== undefined && postSchedule({ ...data, timetableId })
  }

  return (
    <div className={s.FlexWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CloseButton onClick={closeModal} />
      </form>
    </div>
  )
}
export default AddOnMyOwn
