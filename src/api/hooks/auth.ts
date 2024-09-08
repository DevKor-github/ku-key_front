import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { LoginRequest, LoginResponse } from '@/api/types/auth'
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

export const useLogIn = () => {
  const { signIn } = useAuth()
  return useMutation({
    mutationFn: logIn,
    onSuccess: data => {
      console.log('logged:', new Date().toTimeString())
      signIn({
        accessToken: data.token.accessToken,
        refreshToken: data.token.refreshToken,
        verified: data.verified,
      })
    },
  })
}

const logOut = async () => {
  const response = await apiInterface.post<null>(`/auth/logout`)
  return response.data
}

export const useLogOut = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  return useMutation({
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

const checkVerfied = async () => {
  const response = await apiInterface.get<boolean>('/auth/is-verified')
  return response.data
}

export const useCheckVerified = () => {
  return useQuery({ queryKey: ['user-verified'], queryFn: checkVerfied, retry: 0 })
}
