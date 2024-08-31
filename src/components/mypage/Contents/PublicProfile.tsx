import { css } from '@styled-stytem/css'
import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { usePatchMyProfile } from '@/api/hooks/user'
import { GetMyProfileResponse } from '@/api/types/user'
import ProfileChangeHeader from '@/components/mypage/ProfileChangeHeader'
import Button from '@/components/ui/button'
import NationDropdown from '@/components/ui/dropdown/NationDropdown'
import { Input } from '@/components/ui/input'

export const ProfileFormWrapper = css({
  display: 'flex',
  gap: 5,
  alignItems: 'stretch',
  '& input': {
    w: '400px',
  },
})
export const ProfileFormTitle = css({
  flexShrink: 0,
  w: '189px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgColor: 'lightGray.1',
  fontSize: 20,
  fontWeight: 700,
})

export interface PublicProfileForm {
  name: string
  country: string
  homeUniversity: string
  major: string
}
interface PublicProfileProps {
  myProfileData: GetMyProfileResponse
}
const PublicProfile = ({ myProfileData: { name, country, homeUniversity, major } }: PublicProfileProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<PublicProfileForm>()
  useEffect(() => {
    setValue('name', name)
    setValue('country', country)
    setValue('homeUniversity', homeUniversity)
    setValue('major', major)
  }, [name, country, homeUniversity, major, setValue])

  const { mutate: patchProfile } = usePatchMyProfile()

  const onSubmit: SubmitHandler<PublicProfileForm> = data => {
    patchProfile(data)
  }

  const handleNationSelect = useCallback(
    (nation: string) => {
      setValue('country', nation)
    },
    [setValue],
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 20 })}>
      <ProfileChangeHeader type="public" />
      <form className={css({ display: 'flex', flexDir: 'column', gap: 25 })} onSubmit={handleSubmit(onSubmit)}>
        <section className={css({ display: 'flex', flexDir: 'column', gap: '50px' })}>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
            <div className={ProfileFormWrapper}>
              <span className={ProfileFormTitle}>Name</span>
              <Input placeholder={name} {...register('name', { required: true })} />
            </div>
            <div className={ProfileFormWrapper}>
              <span className={ProfileFormTitle}>Nation</span>
              <span className={css({ w: '400px' })}>
                <NationDropdown curNation={watch('country')} handleChange={handleNationSelect} />
              </span>
            </div>
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
            <div className={ProfileFormWrapper}>
              <span className={ProfileFormTitle}>Origin Univ</span>
              <Input placeholder={homeUniversity} {...register('homeUniversity', { required: true })} />
            </div>
            <div className={ProfileFormWrapper}>
              <span className={ProfileFormTitle}>Major</span>
              <Input placeholder={major} {...register('major', { required: true })} />
            </div>
          </div>
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

export default PublicProfile