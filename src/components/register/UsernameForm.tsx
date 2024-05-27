import { css } from '@styled-stytem/css'
import { memo } from 'react'
import { ZodError } from 'zod'

import { useCheckUsernameDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'
import { checkUsernameRegex } from '@/util/register-form'

const UsernameForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'username'>) => {
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication()

  const handleUsernameDuplicationCheck = () => {
    if (checkUsernameRegex(form) instanceof ZodError) return
    mutateCheckUsernameDuplication(form.getValues().username, {
      onSuccess: () => handleValidation('username', 'valid'),
      onError: () => handleValidation('username', 'invalid'),
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
                onBlur={() => checkUsernameRegex(form)}
              />
              <Button type="button" onClick={() => handleUsernameDuplicationCheck()}>
                Send
              </Button>
            </div>
          </FormControl>
          {valid.username === 'valid' && <p className={css({ color: 'green.500' })}>available username</p>}
          {valid.username === 'invalid' && <p className={css({ color: 'red.500' })}>username is currently in use</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
})

export default UsernameForm
