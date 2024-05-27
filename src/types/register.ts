import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { RegisterFormSchema } from '@/lib/zod/register-schema'

export type Valid = 'valid' | 'invalid' | 'unknown'
export interface ValidState {
  email: Valid
  username: Valid
  studentId: Valid
}

export interface RegisterFormProps<T extends keyof ValidState> {
  form: UseFormReturn<z.infer<typeof RegisterFormSchema>>
  valid: Pick<ValidState, T>
  handleValidation: (target: string, value: string) => void
}
