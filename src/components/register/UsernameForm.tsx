import { css } from '@styled-stytem/css'
import { memo } from 'react'
import { ZodError } from 'zod'

import { useCheckUsernameDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'
import { checkRegex } from '@/util/register-form'

const UsernameForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'username'>) => {
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication()

  const handleUsernameDuplicationCheck = () => {
    if (checkRegex(form, 'username') instanceof ZodError) {
      handleValidation('username', 'invalid')
      return
    }
    mutateCheckUsernameDuplication(form.getValues().username, {
      onSuccess: () => handleValidation('username', 'valid'),
      onError: () => {
        handleValidation('username', 'invalid')
        form.setError('username', { message: 'This ID is a duplicate ID', type: 'validate' })
      },
    })
  }
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
          <FormLabel className={css({ fontWeight: 700 })}>Username</FormLabel>
          <FormControl>
            <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
              <Input
                placeholder="Username"
                {...field}
                className={css({ alignSelf: 'stretch' })}
                disabled={valid.username === 'valid'}
              />
              <Button
                type="button"
                onClick={() => handleUsernameDuplicationCheck()}
                className={css({ display: valid.username === 'valid' ? 'none' : 'flex' })}
              >
                Send
              </Button>
            </div>
          </FormControl>
          {valid.username === 'valid' && <p className={css({ color: 'green.500' })}>You can use this ID</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
})

export default UsernameForm
