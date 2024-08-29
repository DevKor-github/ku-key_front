import { memo } from 'react'

import { useAxsiosInterceptor } from '@/util/axios/useAxsiosInterceptor'

const AuthProvider = memo(() => {
  useAxsiosInterceptor()
  return <></>
})

export default AuthProvider
