import { useQuery } from '@tanstack/react-query'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

import { getMyProfile } from '@/api/hooks/user'
import { GetMyProfileResponse } from '@/api/types/user'
import { useAuth } from '@/util/auth/useAuth'

export type UserInfo = {
  id: string
} & GetMyProfileResponse

const UserContext = createContext<UserInfo | null>(null)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { authState } = useAuth()

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ['myProfile'],
    queryFn: getMyProfile,
    enabled: !!authState,
  })

  const user = useMemo(() => {
    if (!authState || !userProfile) return null
    const userId = localStorage.getItem('userId')
    if (!userId) return null
    return { ...userProfile, id: userId }
  }, [authState, userProfile])

  if (isLoading) return null
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUserData = () => {
  const userContext = useContext(UserContext)
  const auth = useAuth()
  if (!userContext && auth.authState) throw new Error('Cannot find UserProvider')
  return userContext
}
