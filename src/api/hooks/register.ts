import { useErrorHandledMutation, UseErrorHandledMutationOption } from '@/api/hooks/useErrorHandledMutation'
import {
  CheckEmailDuplicationResProps,
  RegisterKeys,
  RegisterReqProps,
  VerifyEmailReqProps,
} from '@/api/types/register'
import { apiInterface } from '@/util/axios/custom-axios'

const checkEmailDuplication = async (email: string) => {
  const response = await apiInterface.post<CheckEmailDuplicationResProps>(`/auth/email/${email}`)
  return response.data
}

export const useCheckEmailDuplication = (props: UseErrorHandledMutationOption) => {
  return useErrorHandledMutation({ mutationFn: checkEmailDuplication, ...props })
}

const sendEmail = async (email: string) => {
  const response = await apiInterface.post<boolean>(`/auth/request-email-verification`, {
    email,
  })
  return response.data
}

export const useSendEmail = () => {
  return useErrorHandledMutation({ mutationFn: sendEmail })
}

const verifyEmail = async ({ email, verifyToken }: VerifyEmailReqProps) => {
  const response = await apiInterface.post<boolean>(`/auth/verify-email`, {
    email,
    verifyToken,
  })
  return response.data
}

export const useVerifyEmail = (props: UseErrorHandledMutationOption) => {
  return useErrorHandledMutation({ mutationFn: verifyEmail, ...props })
}

const checkUsernameDuplicate = async (username: string) => {
  const response = await apiInterface.post<boolean>(`/auth/username/${username}`)
  return response.data
}

export const useCheckUsernameDuplication = (props: UseErrorHandledMutationOption) => {
  return useErrorHandledMutation({ mutationFn: checkUsernameDuplicate, ...props })
}

const checkStudentIdDuplicate = async (studentId: string) => {
  const studentNumber = parseInt(studentId)
  const response = await apiInterface.post<boolean>(`/auth/student-number/${studentNumber}`)
  return response.data
}

export const useCheckStudentIdDuplication = (props: UseErrorHandledMutationOption) => {
  return useErrorHandledMutation({ mutationFn: checkStudentIdDuplicate, ...props })
}

const register = async (data: RegisterReqProps) => {
  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key as RegisterKeys])
  }
  const response = await apiInterface.post(`/auth/sign-up`, formData)
  return response.data
}

export const useRegister = () => {
  return useErrorHandledMutation({ mutationFn: register })
}

const patchPassword = async (newPassword: string) => {
  const response = await apiInterface.patch('/auth/password', {
    newPassword,
  })
  return response
}

export const usePatchPassword = () => {
  return useErrorHandledMutation({
    mutationFn: patchPassword,
  })
}
