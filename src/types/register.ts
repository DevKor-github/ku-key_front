import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { RegisterFormSchema } from '@/lib/zod/register-schema'

export type ValidState = 'valid' | 'invalid' | 'unknown'
export interface RegistrationState {
  email: ValidState
  username: ValidState
  studentId: ValidState
  screenShot: ValidState
}

export interface RegisterFormProps<T extends keyof RegistrationState> {
  form: UseFormReturn<z.infer<typeof RegisterFormSchema>>
  valid: Pick<RegistrationState, T>
  handleValidation: (target: keyof RegistrationState, value: ValidState) => void
}
