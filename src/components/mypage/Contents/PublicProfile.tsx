import { css } from '@styled-system/css'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCheckUsernameDuplication } from '@/api/hooks/register'
import { useDeleteLanguage, usePatchMyProfile, usePostLanguage } from '@/api/hooks/user'
import { GetMyProfileResponse } from '@/api/types/user'
import ProfileChangeHeader from '@/components/mypage/ProfileChangeHeader'
import Button from '@/components/ui/button'
import LanguageDropdown from '@/components/ui/dropdown/LanguageDropdown'
import NationDropdown from '@/components/ui/dropdown/NationDropdown'
import { Input } from '@/components/ui/input'
import { Language } from '@/lib/constants/language'
import { useMediaQueryByName } from '@/util/useMediaQueryByName'

export const ProfileFormWrapper = css({
  display: 'flex',
  flexDir: { mdDown: 'column' },
  gap: { base: 5, mdDown: 2.5 },
  alignItems: 'stretch',
  w: 'full',
  '& input': {
    w: { base: '400px', mdDown: '200px', smDown: 'full' },
  },
})
export const ProfileFormTitle = css({
  flexShrink: 0,
  w: { base: '189px', mdDown: '80px', smDown: 'fit-content' },
  py: { mdDown: 1.5, smDown: 0 },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgColor: { base: 'lightGray.1', smDown: 'transparent' },
  fontSize: { base: 20, mdDown: 12, smDown: 16 },
  fontWeight: { base: 700, smDown: 400 },
  h: { base: '39px', smDown: 'fit-content' },
  lineHeight: 1.2,
  smDown: {
    pl: 1.5,
  },
})

export interface PublicProfileForm {
  username: string
  country: string
  homeUniversity: string
  major: string
  languages: Language[]
}
interface PublicProfileProps {
  myProfileData: GetMyProfileResponse
}
const PublicProfile = ({
  myProfileData: { username, country, homeUniversity, major, languages },
}: PublicProfileProps) => {
  const { register, handleSubmit, setValue, watch, getValues, setError, formState, trigger, clearErrors } =
    useForm<PublicProfileForm>()

  useEffect(() => {
    setValue('username', username)
    setValue('country', country)
    setValue('homeUniversity', homeUniversity)
    setValue('major', major)
    setValue('languages', languages)
  }, [username, country, homeUniversity, major, languages, setValue])
  const [usernameValidation, setUsernameValidation] = useState(false)

  const { mutate: patchProfile } = usePatchMyProfile()
  const { mutate: addLang } = usePostLanguage()
  const { mutate: deleteLang } = useDeleteLanguage()
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication({
    onError: () => {
      setError('username', { message: 'This ID is a duplicate ID' })
    },
  })

  const isMobile = useMediaQueryByName('smDown')

  const handleUsernameValidCheck = () => {
    trigger('username', { shouldFocus: true })
    mutateCheckUsernameDuplication(getValues().username, {
      onSuccess: () => setUsernameValidation(true),
    })
  }

  const onSubmit: SubmitHandler<PublicProfileForm> = data => {
    if (getValues().username !== username && !usernameValidation) {
      setError('username', { message: 'Please verify your nickname!' }, { shouldFocus: true })
      return
    }
    patchProfile(data, {
      onSuccess: () => {
        alert('Changed successfully!')
        setUsernameValidation(false)
      },
    })
    const add = data.languages.filter(lang => !languages.includes(lang))
    const del = languages.filter(lang => !data.languages.includes(lang))
    add.map(lang => addLang({ language: lang }))
    del.map(lang => deleteLang({ language: lang }))
  }

  const handleNationSelect = useCallback(
    (nation: string) => {
      setValue('country', nation)
    },
    [setValue],
  )

  const handleLanguageSelect = useCallback(
    (languageArr: Language[]) => {
      setValue('languages', languageArr)
    },
    [setValue],
  )

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: { base: 20, mdDown: 5, smDown: 10 },
        smDown: { px: 5, py: 4 },
      })}
    >
      <ProfileChangeHeader type="public" />
      <form
        className={css({ display: 'flex', flexDir: 'column', gap: { base: 25, smDown: 15 } })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className={css({ display: 'flex', flexDir: 'column', gap: { base: '50px', smDown: '30px' } })}>
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 2.5,
              maxW: { base: '609px', mdDown: '282px', smDown: 'unset' },
            })}
          >
            <div className={css({ display: 'flex', flexDir: 'column' })}>
              <div className={ProfileFormWrapper}>
                <span className={ProfileFormTitle}>Username</span>
                <span
                  className={css({
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: 1,
                    w: { base: '400px', mdDown: '200px', smDown: 'full' },
                  })}
                >
                  <Input
                    placeholder={username}
                    className={css({ smDown: { flexGrow: 1 } })}
                    {...register('username', {
                      required: { value: true, message: 'This field is required' },
                      maxLength: { value: 10, message: 'username must be at most 10 characters long' },
                      minLength: { value: 5, message: 'username must be at least 5 characters long' },
                      onChange: () => {
                        clearErrors('username')
                        setUsernameValidation(false)
                      },
                    })}
                  />
                  <Button
                    aria-checked={
                      getValues('username') !== '' && getValues('username') !== username && !usernameValidation
                    }
                    variant="input"
                    type="button"
                    disabled={getValues('username') === '' || getValues('username') === username || usernameValidation}
                    onClick={handleUsernameValidCheck}
                    className={css({ flexShrink: 0 })}
                  >
                    <p className={css({ textStyle: 'body1_L', lineHeight: '100%', smDown: { fontSize: 12 } })}>
                      Verify
                    </p>
                  </Button>
                </span>
              </div>
              <div
                className={css({
                  display: 'flex',
                  px: 1.5,
                  py: 1,
                  gap: 1,
                  alignItems: 'center',
                  h: '29px',
                  justifyContent: 'flex-end',
                })}
              >
                {formState.errors.username ? (
                  <>
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                    <p className={css({ fontSize: 14, fontWeight: 400, color: 'red.2' })}>
                      {formState.errors.username.message}
                    </p>
                  </>
                ) : (
                  usernameValidation && (
                    <>
                      <CheckCircle2 size={14} />
                      <p className={css({ fontSize: 14, fontWeight: 400 })}>available username</p>
                    </>
                  )
                )}
              </div>
            </div>
            <div className={ProfileFormWrapper}>
              <span className={ProfileFormTitle}>Nation</span>
              <span className={css({ w: { base: '400px', mdDown: '200px', smDown: 'full' } })}>
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
          <div className={ProfileFormWrapper}>
            <span className={ProfileFormTitle}>Language</span>
            <span className={css({ w: { base: '400px', mdDown: '200px', smDown: 'full' } })}>
              <LanguageDropdown curLanguage={watch('languages')} handleChange={handleLanguageSelect} />
            </span>
          </div>
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

export default PublicProfile
