import { css, cx } from '@styled-stytem/css'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { SelectFilterBtnStyle } from '@/components/timetable/LectureBottomSheet/AddClass/FilterSelector'
import TimeSelector from '@/components/timetable/LectureBottomSheet/AddOnMyOwn/TimeSelector'
import { DayArray, DayType, timePattern } from '@/types/timetable'
import { getDuration } from '@/util/timetableUtil'

const FormLayoutStyle = css({ display: 'flex', flexDir: 'row', gap: 10 })

const FormBox = ({ formName, children }: { formName: string; children: ReactNode }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        alignItems: 'center',
        gap: 5,
      })}
    >
      <span className={css({ fontWeight: 500, fontSize: 18, color: 'darkGray.2' })}>{formName}</span>
      {children}
    </div>
  )
}

const InputBoxStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  bgColor: 'bg.gray',
  rounded: 10,
  border: '1px {colors.darkGray.2} solid',
  px: 5,
  py: 3,
  outline: 'none',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1,
  color: 'black.2',
  _placeholder: {
    color: 'lightGray.1',
  },
})

export interface AddOnMyOwnForm {
  title: string
  day: DayType
  startTime: string
  endTime: string
  location?: string
}

interface AddOnMyOwnProps {
  submitHandler: (data: AddOnMyOwnForm) => void
  prevValue?: { title: string; day: DayType; location?: string }
}

const AddOnMyOwn = ({ submitHandler, prevValue = { title: '', day: 'Mon', location: '' } }: AddOnMyOwnProps) => {
  const [trigger, setTrigger] = useState(0)

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    reset,
  } = useForm<AddOnMyOwnForm>({
    defaultValues: {
      title: prevValue?.title,
      day: prevValue?.day,
      startTime: '09:00:00',
      endTime: '09:00:00',
      location: prevValue?.location,
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data: AddOnMyOwnForm) => {
    reset()
    setTrigger(p => p + 1)
    submitHandler(data)
  }

  return (
    <div className={css({ h: '100%', w: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' })}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css({
          h: '100%',
          w: '100%',
          maxH: '300px',
          maxW: '1000px',
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'space-between',
          pb: 2.5,
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
          <div className={FormLayoutStyle}>
            <FormBox formName="Title">
              <input
                className={cx(InputBoxStyle, css({ h: '50px' }))}
                type="text"
                {...register('title', { required: 'The name of the schedule is required.' })}
              />
            </FormBox>
            <FormBox formName="Place">
              <input className={cx(InputBoxStyle, css({ h: '50px' }))} type="text" {...register('location')} />
            </FormBox>
          </div>
          <div className={FormLayoutStyle}>
            <FormBox formName="Day">
              <div className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
                {DayArray.map(day => (
                  <button
                    key={day}
                    type="button"
                    className={SelectFilterBtnStyle({
                      isDayBtn: true,
                      state: watch('day') === day ? 'active' : 'default',
                    })}
                    onClick={() => setValue('day', day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <input
                type="hidden"
                {...register('day', {
                  validate: val => {
                    return DayArray.includes(val as DayType)
                  },
                })}
              />
            </FormBox>
          </div>
          <div className={FormLayoutStyle}>
            <FormBox formName="Start Time">
              <TimeSelector key={trigger} type={'startTime'} setValue={setValue} />
            </FormBox>
            <FormBox formName="End Time">
              <TimeSelector key={trigger} type={'endTime'} setValue={setValue} />
            </FormBox>
            <input type="hidden" {...register('startTime', { pattern: timePattern })} />
            <input
              type="hidden"
              {...register('endTime', {
                pattern: timePattern,
                validate: val => {
                  return getDuration(val, watch('startTime')) > 0 || 'The end time must be later than the start time.'
                },
              })}
            />
          </div>
        </div>
        <div className={css({ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 5 })}>
          {errors?.title?.message ?? errors?.endTime?.message}
          <button
            type="submit"
            className={css({
              fontWeight: 700,
              fontSize: 12,
              color: 'white',
              px: 2.5,
              py: 1,
              rounded: 'full',
              transition: 'all 0.256s',
              cursor: 'pointer',
              bgColor: 'darkGray.1',
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
