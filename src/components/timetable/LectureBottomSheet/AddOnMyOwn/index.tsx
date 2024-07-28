import { css } from '@styled-stytem/css'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { usePostSchedule } from '@/api/hooks/schedule'
import { timePattern } from '@/types/timetable'

const FormLayoutStyle = css({ display: 'flex', flexDir: 'row', gap: 10 })

const FormBox = ({ formName, children }: { formName: string; children: ReactNode }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        gap: 5,
      })}
    >
      <span className={css({ fontWeight: 500, fontSize: 18, color: 'darkGray.2' })}>{formName}</span>
      {children}
    </div>
  )
}

interface AddOnMyOwnForm {
  title: string
  day: string
  startTime: string
  endTime: string
  location?: string
}

interface AddOnMyOwnProps {
  timetableId: number
}

const AddOnMyOwn = ({ timetableId }: AddOnMyOwnProps) => {
  const { mutate: postSchedule } = usePostSchedule()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<AddOnMyOwnForm>({
    defaultValues: {
      title: '',
      day: 'Mon',
      startTime: '00:00:00',
      endTime: '00:00:00',
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data: AddOnMyOwnForm) => {
    postSchedule({ timetableId, ...data })
  }

  return (
    <div className={css({ height: '100%', display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
      <form
        onSubmit={handleSubmit(onSubmit, error => {
          console.log(error)
          setError('root', { message: 'Invalid input!' })
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
          {errors?.root?.message}
          <div className={FormLayoutStyle}>
            <FormBox formName="Title">
              <input type="text" {...register('title', { required: 'The name of the schedule is required.' })}></input>
            </FormBox>
            <FormBox formName="Place">
              <input type="text" {...register('location')}></input>
            </FormBox>
          </div>
          <div className={FormLayoutStyle}>
            <FormBox formName="Day">
              <input
                {...register('day', {
                  validate: val => {
                    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(val)
                  },
                })}
              ></input>
            </FormBox>
          </div>
          <div className={FormLayoutStyle}>
            <FormBox formName="Start Time">
              <input type="text" {...register('startTime', { pattern: timePattern })}></input>
            </FormBox>
            <FormBox formName="End Time">
              <input type="text" {...register('endTime', { pattern: timePattern })}></input>
            </FormBox>
          </div>
        </div>
        <div className={css({ display: 'flex', justifyContent: 'flex-end' })}>
          <button
            type="submit"
            className={css({
              cursor: 'pointer',
            })}
          >
            Complete
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddOnMyOwn
