import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import * as s from './style.css'

import { usePatchSchedule, usePostSchedule } from '@/api/hooks/schedule'
import TimeSelector from '@/common/components/TimeSelector'
import Toast from '@/components/ui/toast'
import { AddOnMyOwnForm } from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn/types'
import CloseButton from '@/domain/Timetable/components/LectureBottomSheet/CloseButton'
import DaySelector from '@/domain/Timetable/components/LectureBottomSheet/DaySelector'
import FormBox from '@/domain/Timetable/components/LectureBottomSheet/FormBox'
import { DayArray, DayType, timePattern } from '@/types/timetable'
import { Button } from '@/ui/Button'
import Input from '@/ui/Input'
import { getDuration } from '@/util/timetableUtil'

interface Props {
  timetableId: number
  closeModal: () => void
  prevValues?: AddOnMyOwnForm & { scheduleId: number }
}
const AddOnMyOwn = ({ timetableId, closeModal, prevValues }: Props) => {
  const isEditPage = prevValues !== undefined
  const defaultValues: AddOnMyOwnForm = isEditPage
    ? prevValues
    : { title: '', day: 'Mon', startTime: '09:00:00', endTime: '09:00:00', location: undefined }

  const { mutate: postSchedule } = usePostSchedule()
  const { mutate: editSchedule } = usePatchSchedule()
  const { register, handleSubmit, setValue, reset, watch } = useForm<AddOnMyOwnForm>({
    defaultValues,
    mode: 'onSubmit',
  })

  const onSubmit = (data: AddOnMyOwnForm) => {
    if (timetableId === undefined) return

    isEditPage
      ? editSchedule({ ...data, timetableId, scheduleId: prevValues.scheduleId })
      : postSchedule({ ...data, timetableId })

    closeModal()
    reset()
  }

  return (
    <div className={s.FlexWrapper}>
      <div className={s.Wrapper}>
        <div className={s.CloseButton}>
          <CloseButton onClick={closeModal} />
        </div>
        <form
          className={s.Container}
          onSubmit={handleSubmit(onSubmit, err => {
            const message = Object.values(err)[0].message
            if (message !== undefined)
              toast.custom(() => <Toast message={message} type="error" />, { position: 'top-right' })
          })}
        >
          <div className={s.FormContainer}>
            <div className={s.FormLayout}>
              <FormBox formName="Title">
                <Input {...register('title', { required: 'The name of the schedule is required.' })} />
              </FormBox>
              <FormBox formName="Place">
                <Input placeholder="optional" {...register('location')} />
              </FormBox>
            </div>
            <div>
              <FormBox formName="Day">
                <DaySelector
                  value={watch('day')}
                  setValue={(day: DayType) => setValue('day', day)}
                  registerReturn={register('day', {
                    validate: val => {
                      return DayArray.includes(val as DayType)
                    },
                  })}
                />
              </FormBox>
            </div>
            <div className={s.FormLayout}>
              <FormBox formName="Start Time">
                <TimeSelector
                  type={'startTime'}
                  value={watch('startTime')}
                  setValue={setValue}
                  {...register('startTime', { pattern: timePattern })}
                />
              </FormBox>
              <FormBox formName="End Time">
                <TimeSelector
                  type={'endTime'}
                  value={watch('endTime')}
                  setValue={setValue}
                  {...register('endTime', {
                    pattern: timePattern,
                    validate: val => {
                      return (
                        getDuration(val, watch('startTime')) > 0 || 'The end time must be later than the start time.'
                      )
                    },
                  })}
                />
              </FormBox>
            </div>
          </div>
          <div className={s.SubmitButton}>
            <Button type="submit">Complete</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddOnMyOwn
