import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { useErrorHandledMutation, UseErrorHandledMutationOption } from '@/api/hooks/useErrorHandledMutation'
import { LoginRequest, LoginResponse, LogoutRequest } from '@/api/types/auth'
import { useAuth } from '@/util/auth/useAuth'
import { apiInterface } from '@/util/axios/custom-axios'

const logIn = async ({ email, password, keepingLogin }: LoginRequest) => {
  const response = await apiInterface.post<LoginResponse>(`/auth/login`, {
    email,
    password,
    keepingLogin,
  })
  return response.data
}

export const useLogIn = (props: UseErrorHandledMutationOption) => {
  const { signIn } = useAuth()
  return useErrorHandledMutation({
    mutationFn: logIn,
    onSuccess: data => {
      console.log('logged:', new Date().toTimeString())
      signIn({
        accessToken: data.token.accessToken,
        refreshToken: data.token.refreshToken,
        verified: data.verified,
        deviceCode: data.deviceCode,
      })
      localStorage.setItem('userId', data.userId)
    },
    ...props,
  })
}

const logOut = async ({ deviceCode }: LogoutRequest) => {
  const response = await apiInterface.post<null>(`/auth/logout`, { deviceCode })
  return response.data
}

export const useLogOut = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  return useErrorHandledMutation({
    mutationFn: logOut,
    onSuccess: () => {
      signOut()
      navigate('/login')
    },
  })
}

const checkPassword = async (password: string) => {
  const response = await apiInterface.post<boolean>('/auth/password', {
    password,
  })
  return response.data
}

export const useCheckPassword = () => {
  return useMutation({
    mutationFn: checkPassword,
  })
}

const checkVerified = async () => {
  const response = await apiInterface.get<boolean>('/auth/is-verified')
  return response.data
}

export const useCheckVerified = (required: boolean) => {
  return useQuery({ queryKey: ['user-verified'], queryFn: checkVerified, retry: 0, enabled: required })
}

const postResetEmail = async (email: string) => {
  const response = await apiInterface.post<{ sended: boolean }>('/auth/temporary-password', {
    email,
  })
  return response.data
}

export const usePostResetEmail = () => {
  return useErrorHandledMutation({
    mutationFn: postResetEmail,
  })
}
