import { memo } from 'react'

import { useAxiosInterceptor } from '@/util/axios/useAxsiosInterceptor'

const AuthProvider = memo(() => {
  useAxiosInterceptor()
  return <></>
})

export default AuthProvider
