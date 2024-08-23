import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'

import { GetMyProfileResponse } from '@/api/types/user'
import ProfileChangeHeader from '@/components/mypage/ProfileChangeHeader'
import ProfileInputForm from '@/components/mypage/ProfileInputForm'
import Button from '@/components/ui/button'

interface PublicProfileProps {
  myProfileData: GetMyProfileResponse
}
const PublicProfile = ({ myProfileData }: PublicProfileProps) => {
  // const {} = useForm({defaultValues:})
  const onSubmit = () => {
    console.log('제출')
  }
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 20 })}>
      <ProfileChangeHeader type="public" />
      <form className={css({ display: 'flex', flexDir: 'column', gap: 25 })}>
        <section className={css({ display: 'flex', flexDir: 'column', gap: '50px' })}>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
            <ProfileInputForm type="Name" placeholder={myProfileData.name} />
            <ProfileInputForm type="Nation" placeholder={myProfileData.country} />
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
            <ProfileInputForm type="Origin Univ" placeholder={myProfileData.homeUniversity} />
            <ProfileInputForm type="Major" placeholder={myProfileData.major} />
          </div>
          <ProfileInputForm type="Language" />
        </section>
        <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <Button variant={'loginColored'} onClick={onSubmit}>
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PublicProfile
