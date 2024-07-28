import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { RegisterFormSchema } from '@/lib/zod/register-schema'

export type ValidState = 'valid' | 'invalid' | 'unknown'
export type RegisterationKey = 'email' | 'username' | 'studentId' | 'screenshot'
export type RegistrationState = {
  [key in RegisterationKey]: ValidState
}

export interface RegisterFormProps<T extends keyof RegistrationState> {
  form: UseFormReturn<z.infer<typeof RegisterFormSchema.step1>>
  valid: Pick<RegistrationState, T>
  handleValidation: (target: keyof RegistrationState, value: ValidState) => void
}

export type ProgressState = 1 | 2 | 3
