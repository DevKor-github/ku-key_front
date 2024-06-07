import useAuthUser from 'react-auth-kit/hooks/useAuthUser'

export const useAuthState = () => {
  const auth = (useAuthUser() as { verified: boolean }) ?? { verified: false }
  return auth
}
