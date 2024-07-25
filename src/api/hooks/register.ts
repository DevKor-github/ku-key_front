import { useMutation } from '@tanstack/react-query'

import { CheckEmailDuplicationResProps, RegisterReqProps, VerifyEmailReqProps } from '@/api/types/register'
import { apiInterface } from '@/util/axios/custom-axios'

const checkEmailDuplication = async (email: string) => {
  const response = await apiInterface.post<CheckEmailDuplicationResProps>(`/auth/email/${email}`)
  return response.data
}

export const useCheckEmailDuplication = () => {
  return useMutation({ mutationFn: checkEmailDuplication })
}

const sendEmail = async (email: string) => {
  const response = await apiInterface.post<boolean>(`/auth/request-email-verification`, {
    email,
  })
  return response.data
}

export const useSendEmail = () => {
  return useMutation({ mutationFn: sendEmail })
}

const verifyEmail = async ({ email, verifyToken }: VerifyEmailReqProps) => {
  const response = await apiInterface.post<boolean>(`/auth/verify-email`, {
    email,
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
  formData.append('email', data.email)
  formData.append('username', data.username)
  formData.append('password', data.password)
  formData.append('studentNumber', data.studentNumber)
  formData.append('country', data.country)
  formData.append('homeUniversity', data.homeUniversity)
  formData.append('major', data.major)
  formData.append('name', data.name)
  const response = await apiInterface.post(`/auth/sign-up`, formData)
  return response.data
}

export const useRegister = () => {
  return useMutation({ mutationFn: register })
}
