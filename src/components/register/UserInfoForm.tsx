import { css } from '@styled-system/css'
import { Camera, CheckCircle2, ShieldAlert } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { useCheckStudentIdDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import NationDropdown from '@/components/ui/dropdown/NationDropdown'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { RegistrationState } from '@/types/register'

interface UserInfoFormProps {
  form: UseFormReturn<z.infer<typeof RegisterFormSchema.step2>>
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleValidation: (target: keyof RegistrationState, value: 'valid' | 'invalid') => void
  valid: RegistrationState
  fileName: string
}

const UserInfoForm = ({ form, handleFileChange, handleValidation, valid, fileName }: UserInfoFormProps) => {
  const { mutate: mutateCheckStudentIdDuplication } = useCheckStudentIdDuplication()
  const handleCheckStudentIdDuplication = () => {
    mutateCheckStudentIdDuplication(form.getValues('studentNumber'), {
      onSuccess: () => {
        form.clearErrors('studentNumber')
        handleValidation('studentId', 'valid')
      },
      onError: () => form.setError('studentNumber', { message: 'This is a duplicate student number ID' }),
    })
  }
  return (
    <form
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '25px',
        w: 'full',
        maxW: 608,
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Name</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <Input placeholder="Name" {...field} className={css({ w: 'full' })} />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('name').invalid && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="country"
        control={form.control}
        render={() => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Nation</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <NationDropdown
                  curNation={form.watch('country')}
                  handleChange={nation => form.setValue('country', nation)}
                  onBlur={() => form.trigger('country')}
                  className={css({ height: '39px' })}
                />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('country').invalid && (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  )}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="homeUniversity"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Origin Univ</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <Input type="text" placeholder="Home University" {...field} className={css({ w: 'full' })} />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('homeUniversity').invalid && (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  )}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="major"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Major</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <Input type="text" placeholder="Major" {...field} className={css({ w: 'full' })} />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('major').invalid && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="studentNumber"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>KU Student ID</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  maxW: 418,
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2.5,
                    w: 'full',
                  })}
                >
                  <Input
                    type="text"
                    placeholder="student ID"
                    {...field}
                    disabled={valid.studentId === 'valid'}
                    className={css({ w: 'full' })}
                  />
                  <Button
                    aria-checked={
                      form.getValues('studentNumber') !== '' &&
                      !form.getFieldState('studentNumber').invalid &&
                      valid.studentId !== 'valid'
                    }
                    variant="input"
                    type="button"
                    disabled={
                      form.getValues('studentNumber') === '' ||
                      form.getFieldState('studentNumber').invalid ||
                      valid.studentId === 'valid'
                    }
                    onClick={handleCheckStudentIdDuplication}
                  >
                    <p className={css({ textStyle: 'body1_L', lineHeight: '100%', smDown: { fontSize: 12 } })}>
                      Verify
                    </p>
                  </Button>
                </div>
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('studentNumber').invalid ? (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  ) : (
                    valid.studentId === 'valid' && (
                      <>
                        <CheckCircle2 size={14} />
                        <p className={css({ fontSize: 14, fontWeight: 400 })}>available student ID</p>
                      </>
                    )
                  )}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <label
        htmlFor="file"
        className={css({
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          flexWrap: 'wrap',
          rowGap: 2.5,
        })}
      >
        <FormLabel>Acceptance Check</FormLabel>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', w: 'full', maxW: 418 })}>
          <Input id="file" type="file" accept="image/*" hidden onChange={handleFileChange} />
          <div
            className={css({
              display: 'flex',
              py: 2.5,
              px: '14px',
              bgColor: 'lightGray.2',
              border: '1px solid {colors.lightGray.1}',
              rounded: 10,
              gap: 2.5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              color: 'lightGray.1',
              cursor: 'pointer',
              w: 'full',
            })}
          >
            <Camera size={18} />
            <p className={css({ fontSize: 16, fontWeight: 600, lineHeight: '100%' })}>
              screenshot of your acceptance email
            </p>
          </div>
          {valid.screenshot === 'invalid' && (
            <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
              <ShieldAlert size={16} className={css({ color: 'red.2' })} />
              <p className={css({ color: 'red.2', fontSize: 14, fontWeight: 400 })}>Only images are accepted</p>
            </div>
          )}
          {valid.screenshot === 'valid' && (
            <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
              <CheckCircle2 size={14} />
              <p className={css({ fontSize: 14, fontWeight: 400 })}>
                {fileName?.length > 20 ? fileName?.slice(0, 20) + '...jpg' : fileName}
              </p>
            </div>
          )}
        </div>
      </label>
    </form>
  )
}

export default UserInfoForm
