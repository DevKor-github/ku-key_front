import { useMutation } from '@tanstack/react-query'

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
  return useMutation({ mutationFn: logOut, onSuccess: signOut })
}
