import { css } from '@styled-stytem/css'
import { Camera, CheckCircle2, ShieldAlert } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { useCheckStudentIdDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
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
    <section className={css({ display: 'flex', flexDir: 'column', gap: '50px' })}>
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
              gap: 138,
            })}
          >
            <FormLabel>Name</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-end',
                })}
              >
                <Input placeholder="Name" {...field} />
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
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Country</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                <Input type="text" placeholder="Country" {...field} />
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
              gap: 138,
            })}
          >
            <FormLabel>Home UNIV</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                <Input type="text" placeholder="Home University" {...field} />
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
              gap: 138,
            })}
          >
            <FormLabel>Major</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                <Input type="text" placeholder="Major" {...field} />
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
              gap: 138,
            })}
          >
            <FormLabel>Student ID</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: 2.5 })}>
                <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                  <Input type="text" placeholder="student ID" {...field} disabled={valid.studentId === 'valid'} />
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
                  Verify
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <label
        htmlFor="file"
        className={css({ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' })}
      >
        <FormLabel>Acceptance Check</FormLabel>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
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
              justifyContent: 'center',
              alignItems: 'center',
              color: 'lightGray.1',
              cursor: 'pointer',
            })}
          >
            <Camera size={18} />
            <p className={css({ fontSize: 16, fontWeight: 600 })}>screenshot of your acceptance email</p>
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
    </section>
  )
}

export default UserInfoForm
