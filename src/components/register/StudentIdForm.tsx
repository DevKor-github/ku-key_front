import { css } from '@styled-stytem/css'
import { memo } from 'react'

import { useCheckStudentIdDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'

const StudentIdForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'studentId'>) => {
  const { mutate: mutateCheckStudentIdDuplication } = useCheckStudentIdDuplication()

  const handleStudentIdDuplicationCheck = () => {
    if (form.getValues().studentId === '') {
      form.setError('studentId', { message: 'This field is required.' })
      return
    }
    mutateCheckStudentIdDuplication(form.getValues().studentId, {
      onSuccess: () => {
        form.clearErrors('studentId')
        handleValidation('studentId', 'valid')
      },
      onError: () => form.setError('studentId', { message: 'This is a duplicate student number ID' }),
    })
  }
  return (
    <FormField
      control={form.control}
      name="studentId"
      render={({ field }) => (
        <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
          <FormLabel className={css({ fontWeight: 700 })}>Student ID</FormLabel>
          <FormControl>
            <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
              <Input placeholder="Student ID" {...field} className={css({ alignSelf: 'stretch' })} />
              <Button type="button" onClick={() => handleStudentIdDuplicationCheck()}>
                Verify
              </Button>
            </div>
          </FormControl>
          <FormMessage />
          {valid.studentId === 'valid' && <p className={css({ color: 'green.500' })}>available student ID</p>}
        </FormItem>
      )}
    />
  )
})

export default StudentIdForm
