import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { CheckEmailDuplicationResProps, VerifyEmailReqProps } from '@/api/types/register'

const checkEmailDuplication = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await axios.post<CheckEmailDuplicationResProps>(
    `http://${import.meta.env.VITE_API_SERVER}/user/email/:${emailWithDomain}`,
  )
  return response.data
}

export const useCheckEmailDuplication = () => {
  return useMutation({ mutationFn: checkEmailDuplication })
}

const sendEmail = async (email: string) => {
  const emailWithDomain = email + '@gmail.com'
  const response = await axios.post<{ sended: boolean }>(
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
  const response = await axios.post<{ verified: boolean }>(
    `http://${import.meta.env.VITE_API_SERVER}/auth/verify-email`,
    {
      email: emailWithDomain,
      verifyToken,
    },
  )
  return response.data
}

export const useVerifyEmail = () => {
  return useMutation({ mutationFn: verifyEmail })
}

const checkUsernameDuplicate = async (username: string) => {
  const response = await axios.post<{ possible: boolean }>(
    `http://${import.meta.env.VITE_API_SERVER}/user/username/:${username}`,
  )
  return response.data
}

export const useCheckUsernameDuplication = () => {
  return useMutation({ mutationFn: checkUsernameDuplicate })
}
