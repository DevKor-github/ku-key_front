import { css } from '@styled-system/css'
import { ShieldAlert } from 'lucide-react'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { usePatchExchangeDay } from '@/api/hooks/user'
import { GetMyProfileResponse } from '@/api/types/user'
import { ProfileFormTitle } from '@/components/mypage/Contents/PublicProfile'
import ProfileChangeHeader from '@/components/mypage/ProfileChangeHeader'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Toast from '@/components/ui/toast'
import dateFormatter from '@/util/dateFormatter'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const FormWrapper = css({
  display: 'flex',
  flexDir: { mdDown: 'column' },
  gap: { base: 5, mdDown: 2.5 },
  alignItems: 'stretch',
  w: 'full',
})

const DateInputStyle = css({
  w: { base: 'fit-content', smDown: 'full' },
  display: 'flex',
  justifyContent: 'center',
})

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
  const isMobile = useMediaQueryByName('smDown')

  const onSubmit: SubmitHandler<ExchangeDayForm> = data => {
    if (data.startDay <= data.endDay) {
      patchDate(
        { startDay: data.startDay, endDay: data.endDay },
        {
          onSuccess: () => toast.custom(() => <Toast message="Changed successfully!" type="success" />),
        },
      )
    } else {
      setError('endDay', {
        message: 'The end date is earlier than the start date!',
      })
    }
  }

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: { base: 20, mdDown: 5 },
        smDown: {
          py: 4,
          px: 5,
        },
      })}
    >
      <ProfileChangeHeader type="exchange" />
      <form className={css({ display: 'flex', flexDir: 'column', gap: 25 })} onSubmit={handleSubmit(onSubmit)}>
        <section className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <div className={FormWrapper}>
            <span className={ProfileFormTitle}>Start Date</span>
            <Input type="date" {...register('startDay')} className={DateInputStyle} />
          </div>
          <div className={FormWrapper}>
            <span className={ProfileFormTitle}>End Date</span>
            <Input type="date" {...register('endDay')} className={DateInputStyle} />
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
          <Button variant={isMobile ? 'mobile' : 'loginColored'} type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ExchangeProfile
