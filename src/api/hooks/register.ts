import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { CheckEmailDuplicationResProps, RegisterReqProps, VerifyEmailReqProps } from '@/api/types/register'

const checkEmailDuplication = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await axios.post<CheckEmailDuplicationResProps>(
    `http://${import.meta.env.VITE_API_SERVER}/auth/email/${emailWithDomain}`,
  )
  return response.data
}

export const useCheckEmailDuplication = () => {
  return useMutation({ mutationFn: checkEmailDuplication })
}

const sendEmail = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await axios.post<boolean>(
    `http://${import.meta.env.VITE_API_SERVER}/auth/request-email-verification`,
    {
      email: emailWithDomain,
    },
  )
  return response.data
}

export const useSendEmail = () => {
  return useMutation({ mutationFn: sendEmail })
}

const verifyEmail = async ({ email, verifyToken }: VerifyEmailReqProps) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await axios.post<boolean>(`http://${import.meta.env.VITE_API_SERVER}/auth/verify-email`, {
    email: emailWithDomain,
    verifyToken,
  })
  return response.data
}

export const useVerifyEmail = () => {
  return useMutation({ mutationFn: verifyEmail })
}

const checkUsernameDuplicate = async (username: string) => {
  const response = await axios.post<boolean>(`http://${import.meta.env.VITE_API_SERVER}/auth/username/${username}`)
  return response.data
}

export const useCheckUsernameDuplication = () => {
  return useMutation({ mutationFn: checkUsernameDuplicate })
}

const checkStudentIdDuplicate = async (studentId: string) => {
  const studentNumber = parseInt(studentId)
  const response = await axios.post<boolean>(
    `http://${import.meta.env.VITE_API_SERVER}/auth/student-number/${studentNumber}`,
  )
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
  const response = await axios.post(`http://${import.meta.env.VITE_API_SERVER}/auth/sign-up`, formData)
  return response.data
}

export const useRegister = () => {
  return useMutation({ mutationFn: register })
}
