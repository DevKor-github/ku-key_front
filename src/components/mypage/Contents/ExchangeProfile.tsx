import { css } from '@styled-stytem/css'
import { ShieldAlert } from 'lucide-react'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { usePatchExchangeDay } from '@/api/hooks/user'
import { GetMyProfileResponse } from '@/api/types/user'
import { ProfileFormTitle, ProfileFormWrapper } from '@/components/mypage/Contents/PublicProfile'
import ProfileChangeHeader from '@/components/mypage/ProfileChangeHeader'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dateFormatter from '@/util/dateFormatter'

interface ExchangeDayForm {
  startDay: string
  endDay: string
}
interface ExchangeProfileProps {
  myProfileData: GetMyProfileResponse
}
const ExchangeProfile = ({ myProfileData }: ExchangeProfileProps) => {
  const { register, handleSubmit, setValue, setError, formState } = useForm<ExchangeDayForm>()
  useEffect(() => {
    const today = new Date()
    setValue('startDay', myProfileData.startDay ? myProfileData.startDay.split('T')[0] : dateFormatter({ date: today }))
    setValue('endDay', myProfileData.endDay ? myProfileData.endDay.split('T')[0] : dateFormatter({ date: today }))
  }, [myProfileData, setValue])

  useEffect(() => {
    if (formState.errors.root) {
      alert(formState.errors.root.message)
    }
  }, [formState])

  const { mutate: patchDate } = usePatchExchangeDay()

  const onSubmit: SubmitHandler<ExchangeDayForm> = data => {
    if (data.startDay <= data.endDay) {
      patchDate(
        { startDay: data.startDay, endDay: data.endDay },
        {
          onSuccess: () => alert('Changed successfully!'),
        },
      )
    } else {
      setError('endDay', {
        message: 'The end date is earlier than the start date!',
      })
    }
  }

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 20 })}>
      <ProfileChangeHeader type="exchange" />
      <form className={css({ display: 'flex', flexDir: 'column', gap: 25 })} onSubmit={handleSubmit(onSubmit)}>
        <section className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <div className={ProfileFormWrapper}>
            <span className={ProfileFormTitle}>Start Date</span>
            <Input type="date" {...register('startDay')} style={{ width: 'fit-content' }} />
          </div>
          <div className={ProfileFormWrapper}>
            <span className={ProfileFormTitle}>End Date</span>
            <Input type="date" {...register('endDay')} style={{ width: 'fit-content' }} />
          </div>
          {formState.errors.endDay && (
            <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
              <ShieldAlert size={16} className={css({ color: 'red.2' })} />
              <p className={css({ fontSize: 14, fontWeight: 400, color: 'red.2' })}>
                {formState.errors.endDay.message}
              </p>
            </div>
          )}
        </section>
        <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <Button variant={'loginColored'} type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ExchangeProfile
