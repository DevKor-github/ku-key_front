import { useMutation } from '@tanstack/react-query'

import { CheckEmailDuplicationResProps, RegisterReqProps, VerifyEmailReqProps } from '@/api/types/register'
import { apiInterface } from '@/util/axios/custom-axios'

const checkEmailDuplication = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await apiInterface.post<CheckEmailDuplicationResProps>(`/auth/email/${emailWithDomain}`)
  return response.data
}

export const useCheckEmailDuplication = () => {
  return useMutation({ mutationFn: checkEmailDuplication })
}

const sendEmail = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await apiInterface.post<boolean>(`/auth/request-email-verification`, {
    email: emailWithDomain,
  })
  return response.data
}

export const useSendEmail = () => {
  return useMutation({ mutationFn: sendEmail })
}

const verifyEmail = async ({ email, verifyToken }: VerifyEmailReqProps) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await apiInterface.post<boolean>(`/auth/verify-email`, {
    email: emailWithDomain,
    verifyToken,
  })
  return response.data
}

export const useVerifyEmail = () => {
  return useMutation({ mutationFn: verifyEmail })
}

const checkUsernameDuplicate = async (username: string) => {
  const response = await apiInterface.post<boolean>(`/auth/username/${username}`)
  return response.data
}

export const useCheckUsernameDuplication = () => {
  return useMutation({ mutationFn: checkUsernameDuplicate })
}

const checkStudentIdDuplicate = async (studentId: string) => {
  const studentNumber = parseInt(studentId)
  const response = await apiInterface.post<boolean>(`/auth/student-number/${studentNumber}`)
  return response.data
}

export const useCheckStudentIdDuplication = () => {
  return useMutation({ mutationFn: checkStudentIdDuplicate })
}

const register = async (data: RegisterReqProps) => {
  const formData = new FormData()
  formData.append('screenshot', data.screenShot)
  formData.append('email', data.email + '@gmail.com')
  formData.append('username', data.username)
  formData.append('password', data.password)
  formData.append('studentNumber', data.studentNumber)
  const response = await apiInterface.post(`/auth/sign-up`, formData)
  return response.data
}

export const useRegister = () => {
  return useMutation({ mutationFn: register })
}
