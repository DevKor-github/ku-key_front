import { useQueryClient } from '@tanstack/react-query'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

import { GetMyProfileResponse } from '@/api/types/user'

export type UserInfo = {
  id: string
} & GetMyProfileResponse

const UserContext = createContext<UserInfo | null>(null)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient()

  const user = useMemo(() => {
    const userProfile = queryClient.getQueryData<GetMyProfileResponse>(['myProfile'])
    const userId = queryClient.getQueryData<string>(['userId'])
    if (!userProfile || !userId) return null
    return { ...userProfile, id: userId }
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUserData = () => {
  const userContext = useContext(UserContext)
  if (!userContext) throw new Error('Cannot find UserProvider')
  return userContext
}
