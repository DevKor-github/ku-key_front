import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

import { LoginRequest, LoginResponse } from '@/api/types/auth'

const logIn = async ({ email, password }: LoginRequest) => {
  const response = await axios.post<LoginResponse>(`${import.meta.env.VITE_API_SERVER}/auth/login`, {
    email,
    password,
    keepingLogin: true,
  })
  return response.data
}

export const useLogIn = () => {
  const signIn = useSignIn()
  return useMutation({
    mutationFn: logIn,
    onSuccess: data => {
      signIn({
        auth: { token: data.token.accessToken, type: 'Bearer' },
        refresh: data.token.refreshToken,
        userState: data.verified,
      })
    },
  })
}

const logOut = async () => {
  const response = await axios.post<null>(`${import.meta.env.VITE_API_SERVER}/auth/logout`)
  return response.data
}

export const useLogOut = () => {
  const signOut = useSignOut()
  return useMutation({ mutationFn: logOut, onSuccess: signOut })
}
